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

  function usoCPUPorMaquinaLocalidade(fkLocalidadeMaquina) {
    var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_cpu FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = '${fkLocalidadeMaquina}'
AND captura.fkRecursoCaptura = 1 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 1);`;
    return database.executar(instrucaoSql);
  }

  function usoCPUTempo(idLocalidade, limite_linhas) {

    var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_cpu, captura.dtCriacaoCaptura AS hora_captura, DATE_FORMAT(captura.dtCriacaoCaptura, '%H:%i:%s') AS momento_grafico FROM maquina JOIN captura ON
    maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 1 ORDER BY captura.dtCriacaoCaptura DESC LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idLocalidade) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_cpu, captura.dtCriacaoCaptura AS hora_captura FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura
WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 1 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 1 )
ORDER BY maquina.nomeMaquina;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function porcentagemUsoCPULocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM media_uso_cpu_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function quantidadeLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT COUNT(*) AS quantidade_servidores FROM maquina WHERE fkLocalidadeMaquina = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function qtdEmAlertaCPULocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM maquinas_com_problema_cpu_por_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function porcentagemUsoMemoriaLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM media_uso_memoria_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function qtdEmAlertaMemoriaLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM maquinas_com_problema_memoria_por_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function usoMemoriaPorMaquinaLocalidade(fkLocalidadeMaquina) {
  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_memoria FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = '${fkLocalidadeMaquina}'
AND captura.fkRecursoCaptura = 2 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 2);`;
  return database.executar(instrucaoSql);
}


function usoMemoriaTempo(idLocalidade, limite_linhas) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_memoria, captura.dtCriacaoCaptura AS hora_captura, DATE_FORMAT(captura.dtCriacaoCaptura, '%H:%i:%s') AS momento_grafico FROM maquina JOIN captura ON
  maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 2 ORDER BY captura.dtCriacaoCaptura DESC LIMIT ${limite_linhas};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRam(idLocalidade) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_memoria, captura.dtCriacaoCaptura AS hora_captura FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura
WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 2 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 2 )
ORDER BY maquina.nomeMaquina;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function porcentagemUsoDiscoLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM media_uso_disco_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function qtdEmAlertaDiscoLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM maquinas_com_problema_disco_por_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function usoDiscoPorMaquinaLocalidade(fkLocalidadeMaquina) {
  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_disco FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = '${fkLocalidadeMaquina}'
AND captura.fkRecursoCaptura = 3 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 3);`;
  return database.executar(instrucaoSql);
}

function usoDiscoTempo(idLocalidade, limite_linhas) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_disco, captura.dtCriacaoCaptura AS hora_captura, DATE_FORMAT(captura.dtCriacaoCaptura, '%H:%i:%s') AS momento_grafico FROM maquina JOIN captura ON
  maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 3 ORDER BY captura.dtCriacaoCaptura DESC LIMIT ${limite_linhas};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function porcentagemPerdaPacotesLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM media_perda_pacotes_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function usoBandaLocalidade(idLocalidade) {

  var instrucaoSql = `SELECT * FROM media_banda_localidade WHERE id_localidade = ${idLocalidade};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function usoBandaPorMaquinaLocalidade(fkLocalidadeMaquina) {
  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_banda FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = '${fkLocalidadeMaquina}'
AND captura.fkRecursoCaptura = 4 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 4);`;
  return database.executar(instrucaoSql);
}


function usoRedeTempo(idLocalidade, limite_linhas) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_banda, captura.dtCriacaoCaptura AS hora_captura, DATE_FORMAT(captura.dtCriacaoCaptura, '%H:%i:%s') AS momento_grafico FROM maquina JOIN captura ON
  maquina.idMaquina = captura.fkMaquinaCaptura WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 4 ORDER BY captura.dtCriacaoCaptura DESC LIMIT ${limite_linhas};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRede(idLocalidade) {

  var instrucaoSql = `SELECT maquina.nomeMaquina AS nome_maquina, captura.registro AS uso_banda, captura.dtCriacaoCaptura AS hora_captura FROM maquina JOIN captura ON maquina.idMaquina = captura.fkMaquinaCaptura
WHERE maquina.fkLocalidadeMaquina = ${idLocalidade} AND captura.fkRecursoCaptura = 4 AND captura.dtCriacaoCaptura = (SELECT MAX(c.dtCriacaoCaptura) FROM captura c WHERE c.fkMaquinaCaptura = maquina.idMaquina AND c.fkRecursoCaptura = 4 )
ORDER BY maquina.nomeMaquina;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    visualizarLocalidades,
    exibirDadosEdicaoLocalidade,
    cadastrarLocalidade,
    editarLocalidades,
    deletarLocalidade,
    usoCPUPorMaquinaLocalidade,
    usoCPUTempo,
    buscarMedidasEmTempoReal,
    porcentagemUsoCPULocalidade,
    quantidadeLocalidade,
    qtdEmAlertaCPULocalidade,
    porcentagemUsoMemoriaLocalidade,
    qtdEmAlertaMemoriaLocalidade,
    usoMemoriaPorMaquinaLocalidade,
    usoMemoriaTempo,
    buscarMedidasEmTempoRealRam,
    porcentagemUsoDiscoLocalidade,
    qtdEmAlertaDiscoLocalidade,
    usoDiscoPorMaquinaLocalidade,
    usoDiscoTempo,
    porcentagemPerdaPacotesLocalidade,
    usoBandaLocalidade,
    usoBandaPorMaquinaLocalidade,
    usoRedeTempo,
    buscarMedidasEmTempoRealRede
   
}
