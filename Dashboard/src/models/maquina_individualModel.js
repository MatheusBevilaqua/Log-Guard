var database = require("../database/config");

function buscarMetricas() {
    var instrucaoSql = `
        SELECT c.fkRecursoCaptura, c.registro
        FROM captura as c
        INNER JOIN (
            SELECT fkRecursoCaptura, MAX(dtCriacaoCaptura) AS ultimaData
            FROM captura
            WHERE fkRecursoCaptura IN (1, 2, 7)
            GROUP BY fkRecursoCaptura
        ) sub ON c.fkRecursoCaptura = sub.fkRecursoCaptura AND c.dtCriacaoCaptura = sub.ultimaData;
    `;
    console.log("Executando instrução SQL: \n" + instrucaoSql);
    console.warn("Retorno database: " + database.executar(instrucaoSql));
    return database.executar(instrucaoSql);
}

var database = require("../database/config");

function buscarMetrics() {
    var instrucaoSql = `
        SELECT c.fkRecursoCaptura, c.registro, c.dtCriacaoCaptura
        FROM captura AS c
        WHERE c.fkRecursoCaptura = 1
        ORDER BY c.dtCriacaoCaptura DESC
        LIMIT 10;
    `;
    console.log("Executando instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

var database = require("../database/config");

// Função para buscar métricas de rede
function buscarMetricasRede() {
    var instrucaoSql = `
        SELECT c.fkRecursoCaptura, c.registro, c.dtCriacaoCaptura
        FROM captura AS c
        WHERE c.fkRecursoCaptura = 4  -- Recurso de Rede
        ORDER BY c.dtCriacaoCaptura DESC
        LIMIT 10;
    `;
    console.log("Executando instrução SQL para métricas de rede: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMetricas,
    buscarMetrics,
    buscarMetricasRede
};

