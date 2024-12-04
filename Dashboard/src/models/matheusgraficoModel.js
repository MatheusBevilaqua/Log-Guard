var database = require("../database/config")

function visualizarMaquinas(idEmpresaMaquina) {
    var instrucaoSql = ` SELECT m.idMaquina, m.nomeMaquina, m.modeloCPU, m.capacidadeRAM, m.disco, m.localidade, m.MACAdress
    FROM maquina m
    JOIN captura c ON c.fkMaquinaCaptura = m.idMaquina
    WHERE c.dtCriacaoCaptura >= NOW() - INTERVAL 3 DAY
    AND m.fkEmpresaMaquina = ${idEmpresaMaquina};`
  
    return database.executar(instrucaoSql);
}

function buscarComponentes() {
    var instrucaoSql = ` ;`;
    return database.executar(instrucaoSql)
}

function buscarCritico(idEmpresaMaquina) {
    var instrucaoSql = `SELECT m.idMaquina, m.nomeMaquina, m.localidade, m.modeloCPU, m.capacidadeRAM, m.disco, m.MACAdress
    FROM maquina m
    JOIN maquinaRecurso mr ON m.idMaquina = mr.idMaquina
    WHERE m.fkEmpresaMaquina = '${idEmpresaMaquina}' AND mr.parametro = 70.000;`
    
    // Select na tabela maquina com join na tabela captura
    //Colocar o select para selecionar conforme o parametro, se passar aparece, caso não, vc já sabe...
    return database.executar(instrucaoSql)
}

module.exports = {
    // buscarComponentes,
    buscarCritico,
    visualizarMaquinas
}