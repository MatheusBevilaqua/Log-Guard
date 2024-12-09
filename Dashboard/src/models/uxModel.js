var database = require("../database/config");

function inserir(funcionalidade, pagina) {
    var instrucaoSql = `INSERT INTO Log VALUES (null, '${funcionalidade}', '${pagina}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql)
        .then(resultado => {
            console.log("Resultado da execução:", resultado);
            return resultado;
        })
        .catch(erro => {
            console.log("Erro na execução da instrução SQL:", erro);
            throw erro;
        });
}

function listar() {
    console.log("ACESSEI O relatorio MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
      SELECT 
    f.idFeedback AS idFeedback,
    f.titulo,
    f.texto,
    f.dtCriacaoFeedback AS data,
    f.fkUsuarioFeedback,
    f.fkEmpresaFeedback,
    f.statusFeedback,
    u.idUsuario AS idUsuario,
    u.nomeUsuario,
    u.emailUsuario
FROM feedback AS f
INNER JOIN usuario AS u
ON f.fkUsuarioFeedback = u.idUsuario;


    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Funcionalidades() {

    var instrucaoSql = `select funcionalidade,count(funcionalidade) as countFuncionalidade from Log group by funcionalidade;  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totais() {

    var instrucaoSql = `SELECT COUNT(*) AS Totais FROM empresa UNION ALL SELECT COUNT(*) AS Totais FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function countFeedback() {

    var instrucaoSql = ``;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
    Funcionalidades,
    totais,
    countFeedback,
    listar
};

