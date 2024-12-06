var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nomeEmpresa,EmailInstitucional,emailResponsavel,cnpj,cep ) {
  var instrucaoSql = `INSERT INTO empresa VALUES (null, '${nomeEmpresa}', '${EmailInstitucional}', '${emailResponsavel}', '${cnpj}', '${cep}')`;

  return database.executar(instrucaoSql);
}


function visualizarEmpresas() {
  var instrucaoSql = `SELECT * FROM visualizar_empresas;`;
  return database.executar(instrucaoSql);
}


// Gerenciamento de máquina
function confirmar_editar(){
  var instrucaoSql = `SELECT * FROM empresa`;
  return database.executar(instrucaoSql);
}
function excluir_editar(){
  var instrucaoSql =`SELECT * FROM empresa`;
  return database.executar(instrucaoSql);
}
function confirmar_cadastrar(fkEmpresaMaquina,nomeMaquina,modeloCPU,capacidadeRAM,disco,localidade,MACAdress){
  var instrucaoSql = `INSERT INTO maquina VALUES (default,'${fkEmpresaMaquina}',null,'${nomeMaquina}', '${modeloCPU}', '${capacidadeRAM}', '${disco}', '${localidade}','${MACAdress}')`;
  return database.executar(instrucaoSql);
} 
function visualizarMaquinas(instrucaoSql) {
  return database.executar(instrucaoSql);
}
function deletarMaquina(idMaquina) {
  var instrucaoSql = `DELETE from maquina WHERE idMaquina = '${idMaquina}';`;
  console.log("Executando a instrucao SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function exibirDadosEdicaoMaquina(idMaquina) {
  var instrucaoSql = `SELECT maquina.idMaquina, maquina.nomeMaquina, maquina.modeloCPU, maquina.capacidadeRAM,maquina.disco, maquina.MACAdress, localidade.nomeLocalidade AS localidade FROM maquina INNER JOIN localidade ON maquina.fkLocalidadeMaquina = localidade.idLocalidade WHERE idMaquina = ${idMaquina}`;
  return database.executar(instrucaoSql)
}
function editarMaquina(idMaquina,nomeMaquina,modeloCPU,capacidadeRAM,disco) {
  var instrucaoSql = `UPDATE maquina SET nomeMaquina = '${nomeMaquina}', modeloCPU = '${modeloCPU}', capacidadeRAM  = '${capacidadeRAM }',disco = '${disco}' WHERE idMaquina = '${idMaquina}';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar,visualizarEmpresas, confirmar_editar, excluir_editar, confirmar_cadastrar,visualizarMaquinas,deletarMaquina,exibirDadosEdicaoMaquina,editarMaquina};





