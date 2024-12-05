//CONFIGURAR COM OS SELECTS DO BANCO DE DADOS
var database = require("../database/config");
function buscarMedidasCPU() {
    var instrucaoSql = `
  LECT idCaptura, registro 
FROM captura 
WHERE fkMaquinaRecursoCaptura = 1 
ORDER BY idCaptura DESC 
LIMIT 5;
`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}


function tempoRealCPU(){
    instrucaoSql = `
    SELECT
    AVG(valorRegistro) as CPU,
    FORMAT(dataRegistro, 'HH:mm') AS intervalo_tempo,
    MAX(Servidor.nome) as nome_servidor
FROM
    Registro
JOIN
    Componente ON fkComponente = idComponente
JOIN
    Servidor ON fkServidor = idServidor
JOIN
    Salas ON fkSalas = idSalas 
WHERE
    fkTipoComponente = 1 AND idServidor = 12
GROUP BY
    FORMAT(dataRegistro, 'HH:mm')
ORDER BY
    FORMAT(dataRegistro, 'HH:mm') DESC;
    `
    console.log("Executando instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasCPU,
    tempoRealCPU
}