var database = require("../database/config")

function getMaquinasDataRAM(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT m.nomeMaquina, c.registro, c.dtCriacaoCaptura 
        FROM maquina m 
        JOIN captura c ON m.idMaquina = c.fkMaquinaCaptura 
        WHERE m.fkEmpresaMaquina = ${idEmpresaUsuario} AND c.fkRecursoCaptura = 2
        ORDER BY m.nomeMaquina, c.dtCriacaoCaptura;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getMaquinasDataCPU(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT m.nomeMaquina, c.registro, c.dtCriacaoCaptura 
        FROM maquina m 
        JOIN captura c ON m.idMaquina = c.fkMaquinaCaptura 
        WHERE m.fkEmpresaMaquina = ${idEmpresaUsuario} AND c.fkRecursoCaptura = 1
        ORDER BY m.nomeMaquina, c.dtCriacaoCaptura;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getMaquinasDataREDE(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT m.nomeMaquina, c.registro, c.dtCriacaoCaptura 
        FROM maquina m 
        JOIN captura c ON m.idMaquina = c.fkMaquinaCaptura 
        WHERE m.fkEmpresaMaquina = ${idEmpresaUsuario} AND c.fkRecursoCaptura = 4
        ORDER BY m.nomeMaquina, c.dtCriacaoCaptura;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function getMaqemriscosemana(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT 
    m.nomeMaquina, 
    l.nomeLocalidade AS Localidade, 
    COUNT(c.idCaptura) AS quantidade_alertas
FROM 
    maquina m
JOIN 
    captura c ON m.idMaquina = c.fkMaquinaCaptura
JOIN 
    localidade l ON l.idLocalidade = m.fkLocalidadeMaquina
WHERE 
    c.tem_problema = TRUE 
    AND c.dtCriacaoCaptura >= NOW() - INTERVAL 1 WEEK
    AND m.fkEmpresaMaquina = ${idEmpresaUsuario}
GROUP BY 
    m.nomeMaquina, l.nomeLocalidade
ORDER BY
    quantidade_alertas DESC;`;

    console.log("Executando SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function getAlertaSemana(idEmpresaUsuario) {
    var instrucaoSql = `SELECT 
    c.dtCriacaoCaptura AS Data,
    m.nomeMaquina AS Máquina,
    l.nomeLocalidade AS Localidade,
    r.nomeRecurso AS Componente,
    c.registro AS Alerta,
    mr.parametro AS Parametro
FROM 
    captura c
    JOIN maquina m ON m.idMaquina = c.fkMaquinaCaptura
    JOIN localidade l ON l.idLocalidade = m.fkLocalidadeMaquina
    JOIN recurso r ON r.idRecurso = c.fkRecursoCaptura
    JOIN maquinaRecurso mr ON mr.fkrecurso = r.idRecurso AND mr.idMaquinaRecurso = c.fkMaquinaRecursoCaptura
WHERE 
    c.tem_problema = TRUE 
    AND c.dtCriacaoCaptura >= NOW() - INTERVAL 1 WEEK
    AND m.fkEmpresaMaquina = ${idEmpresaUsuario};`;
    console.log("Executando SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function getRiscoSemanal(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT 
            m.nomeMaquina, 
            COUNT(c.idCaptura) AS quantidade_alertas
        FROM 
            maquina m
        JOIN 
            captura c ON m.idMaquina = c.fkMaquinaCaptura
        WHERE 
            c.tem_problema = TRUE 
            AND c.dtCriacaoCaptura >= NOW() - INTERVAL 1 WEEK
            AND m.fkEmpresaMaquina = ${idEmpresaUsuario}
        GROUP BY 
            m.nomeMaquina
        ORDER BY
            quantidade_alertas DESC;
    `;
    console.log("Executando SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
}


function getAlertasPorDia(idEmpresaUsuario) {
    var instrucaoSql = `
        SELECT DATE(c.dtCriacaoCaptura) as Data, COUNT(*) as Quantidade
        FROM captura c
        JOIN maquina m ON m.idMaquina = c.fkMaquinaCaptura
        WHERE c.tem_problema = TRUE
        AND m.fkEmpresaMaquina = ${idEmpresaUsuario}
        AND c.dtCriacaoCaptura >= NOW() - INTERVAL 3 DAY
        GROUP BY DATE(c.dtCriacaoCaptura)
        ORDER BY Data ASC;
    `;
    console.log("Executando SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql)
        .then((resultado) => {
            console.log("Resultado da query:", resultado);
            return resultado;
        })
        .catch((erro) => {
            console.error("Erro na execução da query:", erro);
            throw erro;
        });
}






module.exports = {
    getRiscoSemanal,
    getMaqemriscosemana,
    getMaquinasDataRAM,
    getMaquinasDataCPU,
    getMaquinasDataREDE,
    getAlertaSemana,
    getAlertasPorDia,
}