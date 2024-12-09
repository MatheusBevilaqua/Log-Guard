var database = require("../database/config");

function visualizarFuncionarios(fkEmpresa) {
  var instrucaoSql = `SELECT * FROM view_tarefasUsuarios WHERE id_empresa = ${fkEmpresa};`;
  return database.executar(instrucaoSql);
}

function melhorDesempenho(idEmpresaUsuario) {
  var instrucaoSql = `SELECT usuario.nomeusuario FROM usuario JOIN tarefa ON usuario.idusuario = tarefa.fkUsuarioTarefa WHERE usuario.fkEmpresaUsuario = ${idEmpresaUsuario} ORDER BY tarefa.qtdEssencial DESC LIMIT 1;`;
  return database.executar(instrucaoSql).then(resultados => {
      if (resultados.length > 0) {
          return resultados[0];
      } else {
          throw new Error("Nenhum resultado encontrado");
      }
  });
}

function verRelatorio(fkEmpresa) {
    var instrucaoSql = `SELECT usuario_nome as nomeUsuario, tarefas_essenciais as tarefasEssenciais, 
total_tarefas - tarefas_essenciais as outrasTarefas FROM view_tarefasUsuarios 
WHERE id_empresa = ${fkEmpresa};`;
    return database.executar(instrucaoSql);
  }

module.exports = {
  visualizarFuncionarios,
  melhorDesempenho,
  verRelatorio
  
}
