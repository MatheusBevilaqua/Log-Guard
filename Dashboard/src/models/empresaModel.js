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

function editar(id, nome,emailInstitucional,emailResponsavel,cnpj,cep, cpu, bl, hd, mem ){

   var instrucaoSql = ` UPDATE empresa SET nomeEmpresa = '${nome}', emailInstitucional = '${emailInstitucional}', emailResponsavel = '${emailResponsavel}', cnpj = '${cnpj}', cep = '${cep}', statusEmpresa = 'ATIVO', paramCPU = ${cpu}, paramMEM = ${mem}, paramHD = ${hd}, paramBL = ${bl} WHERE idEmpresa = ${id}; `;
   return database.executar(instrucaoSql)
}

function cadastrar(nome,emailInstitucional,emailResponsavel,cnpj,cep, cpu, bl, hd, mem ) {
  var instrucaoSql = `INSERT INTO empresa VALUES (null, '${nome}', '${emailInstitucional}', '${emailResponsavel}', '${cnpj}', '${cep}','ATIVO', ${cpu}, ${mem}, ${hd}, ${bl}, default)`;

  return database.executar(instrucaoSql);
}


function visualizarEmpresas() {
  var instrucaoSql = `SELECT * FROM empresa;`;
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
  var instrucaoSql = `SELECT * FROM maquina WHERE idMaquina = '${idMaquina}';`;
  return database.executar(instrucaoSql)
}
function editarMaquina(idMaquina,nomeMaquina,modeloCPU,capacidadeRAM,disco,localidade) {
  var instrucaoSql = `UPDATE maquina SET nomeMaquina = '${nomeMaquina}', modeloCPU = '${modeloCPU}', capacidadeRAM  = '${capacidadeRAM }',disco = '${disco}',localidade = '${localidade}' WHERE idMaquina = '${idMaquina}';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar,visualizarEmpresas, editar, excluir_editar, confirmar_cadastrar,visualizarMaquinas,deletarMaquina,exibirDadosEdicaoMaquina,editarMaquina};





