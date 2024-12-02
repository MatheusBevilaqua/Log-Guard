# RMySQL serve para conectar o banco de dados com o RStudio, já a biblioteca dplyr serve para calcular a probabilidade.
library(RMySQL)
library(dplyr)

con <- dbConnect(MySQL(), user = 'root', password = '1234', dbname = 'logGuard', host = 'localhost')

calcular_probabilidade <- function(registros, parametro) {
  probabilidade <- mean(registros) / parametro
  return(probabilidade)
}

# Armazena os parâmetros de risco
query_parametros <- "
  SELECT fkrecurso, parametro
  FROM maquinaRecurso
  WHERE fkrecurso IN (1, 2, 3) -- CPU, RAM e Disco"

parametros <- dbGetQuery(con, query_parametros)

# Armazena os últimos 7 dias dos dados de uso de CPU, RAM e Disco
query_dados <- "
  SELECT fkRecursoCaptura, registro, DATE(dtCriacaoCaptura) as data
  FROM captura
  WHERE fkRecursoCaptura IN (1, 2, 3) AND dtCriacaoCaptura >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)"

dados <- dbGetQuery(con, query_dados)

  # Armazena os resultados em um dataframe para conseguir realizar a probabilidade
  resultados <- data.frame(dataRegistro = character(), probabilidade = numeric(), fkRecurso = integer())
  
  for (recurso in unique(dados$fkRecursoCaptura)) {
    # Filtrar os dados para o recurso escolhido
    dados_recurso <- dados %>% filter(fkRecursoCaptura == recurso)
    
    # Pega o parâmetro do recurso
    parametro <- parametros %>% filter(fkrecurso == recurso) %>% pull(parametro)
    
    # calcula a probabilidade diária
    dados_agrupados <- dados_recurso %>%
      group_by(data) %>%
      summarise(registro_medio = mean(registro))
    
    for (i in 1:nrow(dados_agrupados)) {
      data <- dados_agrupados$data[i]
      registros <- dados_agrupados$registro_medio[i]
      probabilidade <- calcular_probabilidade(registros, parametro)
      resultados <- rbind(resultados, data.frame(dataRegistro = as.character(data), probabilidade = probabilidade, fkRecurso = recurso))
    }
  }
  
  # Insere os dados na tabela
  for (i in 1:nrow(resultados)) {
    query <- sprintf("INSERT INTO ProbabilidadeRiscos (dataRegistro, probabilidade, fkRecurso) VALUES ('%s', %f, %d)", resultados$dataRegistro[i], resultados$probabilidade[i], resultados$fkRecurso[i])
    dbSendQuery(con, query)
  }
  
  print(resultados)
# Fechar a conexão com o banco de dados
dbDisconnect(con)

