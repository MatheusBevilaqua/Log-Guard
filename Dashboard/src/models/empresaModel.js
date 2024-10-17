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
  var instrucaoSql = `INSERT INTO maquina VALUES (default,'${fkEmpresaMaquina}','${nomeMaquina}', '${modeloCPU}', '${capacidadeRAM}', '${disco}', '${localidade}','${MACAdress}')`;
  return database.executar(instrucaoSql);
} 

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar,visualizarEmpresas, confirmar_editar, excluir_editar, confirmar_cadastrar};





