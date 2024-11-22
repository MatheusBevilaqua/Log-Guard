var database = require("../database/config");

function contabilizaTarefas(fkUsuarioTarefa,qtdDesejavel, qtdImportante,qtdEssencial) {
  
var instrucaoSql = `INSERT INTO tarefa VALUES (default, '${fkUsuarioTarefa}', '${qtdDesejavel}', '${qtdImportante}','${qtdEssencial}');`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
  contabilizaTarefas
}
