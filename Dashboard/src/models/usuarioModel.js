var database = require("../database/config")

// COLOCAR UM VIEW AQUI POR GENTILEZA
function autenticar(emailUsuario, senhaUsuario) {
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, emailUsuario, fkEmpresaUsuario as empresaId, tipoPerfilUsuario FROM usuario WHERE emailUsuario = '${emailUsuario}' AND senhaUsuario = '${senhaUsuario}'; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeUsuario, emailUsuario, senhaUsuario, fkEmpresaUsuario, tipoPerfilUsuario) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       INSERT INTO usuario VALUES (null,'${fkEmpresaUsuario}','${nomeUsuario}','${emailUsuario}','${senhaUsuario}','${tipoPerfilUsuario}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function visualizarUsuarios(idEmpresaUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario = '${idEmpresaUsuario}' AND tipoPerfilUsuario != 'DESATIVADO';`;
    return database.executar(instrucaoSql);
}

function visualizarMaquinas(idEmpresaUsuario) {
    var instrucaoSql = `SELECT idMaquina, nomeMaquina, localidade FROM maquina WHERE fkEmpresaMaquina = '${idEmpresaUsuario}'`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function visualizarUsuariosADM(idEmpresaUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuarIo = "ADMINISTRADOR" AND tipoPerfilUsuario != 'DESATIVADO';`;
    return database.executar(instrucaoSql);
}

function visualizarUsuariosCOMUM(idEmpresaUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuarIo = "COMUM" AND tipoPerfilUsuario != 'DESATIVADO';`;
    return database.executar(instrucaoSql);
}

function totalfunc(idEmpresaUsuario) {
    var instrucaoSql = `SELECT COUNT(*) AS total_usuarios FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuario != 'DESATIVADO';`;
    return database.executar(instrucaoSql).then(resultados => {
        return resultados[0].total_usuarios;
    });
}

function totaladms(idEmpresaUsuario) {
    var instrucaoSql = `SELECT COUNT(*) AS total_administradores FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuario = "ADMINISTRADOR";`;
    return database.executar(instrucaoSql).then(resultados => {
        console.log("Resultado da consulta total_administradores:", resultados);
        return resultados[0].total_administradores;
    });
}

function totalanalista(idEmpresaUsuario) {
    var instrucaoSql = `SELECT COUNT(*) AS total_analistas FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuario = "COMUM";`;
    return database.executar(instrucaoSql).then(resultados => {
        console.log("Resultado da consulta total_analistas:", resultados);
        return resultados[0].total_analistas;
    });
}

function exibirDadosEdicaoUsuario(idUsuario) {
    var instrucaoSql = `SELECT *  FROM usuario WHERE idUsuario = '${idUsuario}';`;
    return database.executar(instrucaoSql)
}

// --------------------------------------------------------------------

function deletarusuario(idUsuario) {
    var instrucaoSql = `UPDATE usuario SET tipoPerfilUsuario = "DESATIVADO" WHERE idUsuario = '${idUsuario}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editarusuario(idUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) {
    var instrucaoSql = `UPDATE usuario SET nomeUsuario = '${nomeUsuario}', emailUsuario = '${emailUsuario}', senhaUsuario = '${senhaUsuario}', tipoPerfilUsuario = '${tipoPerfilUsuario}' WHERE idUsuario = '${idUsuario}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarnovouser(idEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) {
    var instrucaoSql = `
    INSERT INTO usuario VALUES ('${idEmpresaUsuario}','${nomeUsuario}','${emailUsuario}','${senhaUsuario}','${tipoPerfilUsuario}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

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


module.exports = {
    getMaqemriscosemana,
    autenticar,
    cadastrar,
    visualizarUsuarios,
    visualizarUsuariosADM,
    visualizarUsuariosCOMUM,
    totalfunc,
    totalanalista,
    totaladms,
    exibirDadosEdicaoUsuario,
    deletarusuario,
    editarusuario,
    cadastrarnovouser,
    visualizarMaquinas,
    getMaquinasDataRAM,
    getMaquinasDataCPU,
    getMaquinasDataREDE,
    getAlertaSemana
};
