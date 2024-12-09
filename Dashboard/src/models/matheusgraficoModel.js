var database = require("../database/config")

function visualizarMaquinas(idEmpresaMaquina) {
    var instrucaoSql = `  SELECT 
    m.idMaquina, 
    m.nomeMaquina, 
    m.modeloCPU, 
    m.capacidadeRAM, 
    m.disco, 
    l.nomeLocalidade AS localidade, 
    DATE_FORMAT(c.dtCriacaoCaptura, '%d-%m-%Y %H:%i') AS dtCaptura
FROM 
    maquina m
JOIN 
    localidade l ON m.fkLocalidadeMaquina = l.idLocalidade
JOIN 
    captura c ON c.fkMaquinaCaptura = m.idMaquina
WHERE 
    c.dtCriacaoCaptura >= NOW() - INTERVAL 3 DAY
    AND m.fkEmpresaMaquina = ${idEmpresaMaquina};
`

    return database.executar(instrucaoSql);
}

function buscarCritico(idEmpresaMaquina) {
    var instrucaoSql = `SELECT 
    m.idMaquina, 
    m.nomeMaquina, 
    l.nomeLocalidade AS localidade, 
    r.nomeRecurso AS Componente,
    FORMAT(c.registro, 0) AS Registros,
    DATE_FORMAT(c.dtCriacaoCaptura, '%d-%m-%Y %H:%i') AS dtCaptura
FROM 
    maquina m
JOIN 
    localidade l ON m.fkLocalidadeMaquina = l.idLocalidade
JOIN 
    captura c ON m.idMaquina = c.fkMaquinaCaptura
JOIN 
    recurso r ON c.fkRecursoCaptura = r.idRecurso
JOIN 
    maquinaRecurso mr ON c.fkMaquinaRecursoCaptura = mr.idMaquinaRecurso
WHERE 
    c.dtCriacaoCaptura >= NOW() - INTERVAL 3 DAY
    AND m.fkEmpresaMaquina = ${idEmpresaMaquina}
    AND (
        (mr.fkrecurso = 1 AND mr.parametro >= 65.0) OR
        (mr.fkrecurso = 2 AND mr.parametro >= 70.0) OR
        (mr.fkrecurso = 3 AND mr.parametro >= 80.0)
    )
    AND c.dtCriacaoCaptura = (
        SELECT MAX(c2.dtCriacaoCaptura)
        FROM captura c2
        WHERE c2.fkMaquinaCaptura = c.fkMaquinaCaptura
    );
    `
    return database.executar(instrucaoSql)
}

function buscarComponentes(idEmpresaMaquina) {
    var instrucaoSql = `SELECT 
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 1 THEN 1 ELSE 0 END) AS totalCPU,
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 2 THEN 1 ELSE 0 END) AS totalRAM,
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 3 THEN 1 ELSE 0 END) AS totalDisco,
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 1 AND maquinaRecurso.parametro > 65.0 THEN 1 ELSE 0 END) AS CPU_acima_parametro,
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 2 AND maquinaRecurso.parametro > 70.0 THEN 1 ELSE 0 END) AS RAM_acima_parametro,
    SUM(CASE WHEN maquinaRecurso.fkrecurso = 3 AND maquinaRecurso.parametro > 80.0 THEN 1 ELSE 0 END) AS Disco_acima_parametro
    
    FROM 
    maquinaRecurso
    
    JOIN 
    maquina ON maquinaRecurso.idMaquinaRecurso = maquina.idMaquina
    
    JOIN 
    empresa ON maquina.fkEmpresaMaquina = empresa.idEmpresa
    
    WHERE 
    empresa.idEmpresa = ${idEmpresaMaquina};`
    return database.executar(instrucaoSql)
}


function listar() {
    var instrucaoSql = `SELECT    
    recurso.nomeRecurso,
    FORMAT(AVG(captura.registro), 0) AS media_uso
FROM 
    captura
JOIN 
    recurso ON captura.fkRecursoCaptura = recurso.idRecurso
JOIN 
    maquina ON captura.fkMaquinaCaptura = maquina.idMaquina
JOIN 
    empresa ON maquina.fkEmpresaMaquina = empresa.idEmpresa
WHERE 
    empresa.idEmpresa = ${idEmpresaMaquina}
GROUP BY 
    recurso.nomeRecurso;
    `
    return database.executar(instrucaoSql)
}

module.exports = {
    visualizarMaquinas,
    buscarCritico,
    buscarComponentes
}