var database = require("../database/config");

function visualizarLocalidades() {
    var instrucaoSql = `SELECT * FROM visualizar_localidades;`;
    return database.executar(instrucaoSql);
  }

module.exports = {
    visualizarLocalidades
}
