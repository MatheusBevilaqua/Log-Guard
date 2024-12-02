var database = require("../database/config");

function visualizarFuncionarios(fkEmpresa) {
    var instrucaoSql = `SELECT * FROM view_tarefasUsuarios WHERE id_empresa = ${fkEmpresa};`;
    return database.executar(instrucaoSql);
  }


module.exports = {
    visualizarFuncionarios
}
