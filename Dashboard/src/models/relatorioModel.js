var database = require("../database/config");

function listar() {
    console.log("ACESSEI O relatorio MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.idRelatorio AS idrelatorio,
            a.titulo,
            a.texto,
            a.fkRelatorioUsuario,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.emailUsuario,
        FROM relatorio as a
            INNER JOIN usuario as u
                ON a.fkRelatorioUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario, estado) {
    console.log("ACESSEI O relatorio MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO relatorio (titulo, texto, fkusuarioRelatorio, statisMaquina) VALUES ('${titulo}', '${descricao}', ${idUsuario},'${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idrelatorio) {
    console.log("ACESSEI O relatorio MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idrelatorio);
    var instrucaoSql = `
        UPDATE relatorio SET texto = '${novaDescricao}' WHERE id = ${idrelatorio};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idrelatorio) {
    console.log("ACESSEI O relatorio MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idrelatorio);
    var instrucaoSql = `
        DELETE FROM relatorio WHERE id = ${idrelatorio}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    publicar,
    editar,
    deletar
}
