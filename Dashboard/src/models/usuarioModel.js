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
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}';`;
    return database.executar(instrucaoSql);
}

function visualizarUsuariosADM(idEmpresaUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuarIo = "ADMINISTRADOR";`;
    return database.executar(instrucaoSql);
}

function visualizarUsuariosCOMUM(idEmpresaUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}' AND tipoPerfilUsuarIo = "COMUM";`;
    return database.executar(instrucaoSql);
}

function totalfunc(idEmpresaUsuario) {
    var instrucaoSql = `SELECT COUNT(*) AS total_usuarios FROM usuario WHERE fkEmpresaUsuario ='${idEmpresaUsuario}';`;
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


module.exports = {
    autenticar,
    cadastrar,
    visualizarUsuarios,
    visualizarUsuariosADM,
    visualizarUsuariosCOMUM,
    totalfunc,
    totalanalista,
    totaladms
};