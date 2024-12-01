var database = require("../database/config");

function visualizarLocalidades(fkEmpresa) {
    var instrucaoSql = `SELECT * FROM view_localidades_maquinas WHERE id_empresa = ${fkEmpresa};`;
    return database.executar(instrucaoSql);
  }

  function exibirDadosEdicaoLocalidade(idLocalidade) {
    var instrucaoSql = `SELECT * FROM localidade WHERE idLocalidade = ${idLocalidade}`;
    return database.executar(instrucaoSql)
  }

  function cadastrarLocalidade(fkEmpresaLocalidade,nomeLocalidade,CEPLocalidade,rua,bandaLarga,parametroPacotes) {
    var instrucaoSql = `INSERT INTO localidade VALUES (default, ${fkEmpresaLocalidade},'${nomeLocalidade}','${CEPLocalidade}','${rua}',${bandaLarga},${parametroPacotes});`;
    return database.executar(instrucaoSql)
  }

  function editarLocalidades(idLocalidade,nomeLocalidade,CEP,rua,banda,Pacotes) {
    var instrucaoSql = `UPDATE localidade SET nomeLocalidade = '${nomeLocalidade}', CEP_localidade = '${CEP}', rua_localidade  = '${rua}',parametro_perda_pacotes = '${banda}',parametro_taxa_uso_bl = '${Pacotes}' WHERE idLocalidade = '${idLocalidade}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function deletarLocalidade(idLocalidade) {
    var instrucaoSql = `DELETE from localidade WHERE idLocalidade = '${idLocalidade}';`;
    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }


module.exports = {
    visualizarLocalidades,
    exibirDadosEdicaoLocalidade,
    cadastrarLocalidade,
    editarLocalidades,
    deletarLocalidade
}
