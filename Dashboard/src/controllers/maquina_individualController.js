var medidaModel = require("../models/maquina_individualModel");

function buscarMedidasCPU(req, res) {

    medidaModel.buscarMedidasCPU().then(function(resultado)
        
    {
            
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }   
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempoRealCPU(req, res) {

    medidaModel.tempoRealCPU().then(function(resultado)
        
    {
            
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }   
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarMedidasCPU,
    tempoRealCPU
}