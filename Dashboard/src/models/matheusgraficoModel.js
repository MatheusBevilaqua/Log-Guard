var database = require("../database/config")

function visualizarMaquinas(idEmpresaMaquina) {
    var instrucaoSql = `  SELECT 
    m.idMaquina, 
    m.nomeMaquina, 
    m.modeloCPU, 
    m.capacidadeRAM, 
    m.disco, 
    l.nomeLocalidade, 
    m.MACAdress
FROM 
    maquina m
JOIN 
    localidade l ON m.fkLocalidadeMaquina = l.idLocalidade
JOIN 
    captura c ON c.fkMaquinaCaptura = m.idMaquina
WHERE 
    c.dtCriacaoCaptura >= NOW() - INTERVAL 3 DAY
    AND m.fkEmpresaMaquina = ${idEmpresaMaquina};`

    return database.executar(instrucaoSql);
}

function buscarCritico(idEmpresaMaquina) {
    var instrucaoSql = `
     SELECT 
    m.idMaquina, 
    m.nomeMaquina, 
    l.nomeLocalidade AS localidade, 
    r.nomeRecurso AS Componente,
    c.registro AS Registros
    FROM 
    maquina m
    JOIN 
    localidade l ON m.fkLocalidadeMaquina = l.idLocalidade
    JOIN 
    maquinaRecurso mr ON m.idMaquina = mr.idMaquinaRecurso
    JOIN 
    captura c ON m.idMaquina = c.fkMaquinaCaptura
    JOIN 
    recurso r ON mr.fkrecurso = r.idRecurso
    WHERE 
    m.fkEmpresaMaquina = ${idEmpresaMaquina}
    AND(
        (mr.fkrecurso = 1 AND mr.parametro > 65.0) OR
        (mr.fkrecurso = 2 AND mr.parametro > 70.0) OR
        (mr.fkrecurso = 3 AND mr.parametro > 80.0)
    );`
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


function grafico() {
    var instrucaoSql = `SELECT    
    recurso.nomeRecurso,
    SUM(captura.registro) AS quantidade_uso 
    FROM 
    captura
    
    JOIN 
    recurso ON captura.fkRecursoCaptura = recurso.idRecurso
    
    JOIN 
    maquina ON captura.fkMaquinaCaptura = maquina.idMaquina
    
    JOIN 
    empresa ON maquina.fkEmpresaMaquina = empresa.idEmpresa
    WHERE 
    empresa.idEmpresa = 3 -- Substitua 3 pelo ID da empresa desejada
    GROUP BY 
    recurso.nomeRecurso;
    `
    return database.executar(instrucaoSql)
}

module.exports = {
    visualizarMaquinas,
    buscarCritico,
    buscarComponentes,
    grafico
}