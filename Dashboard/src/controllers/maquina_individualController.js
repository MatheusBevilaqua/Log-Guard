var medidaModel = require("../models/maquina_individualModel");

function buscarUltimasMetricas(req, res) {
    medidaModel.buscarMetricas().then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas métricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

var medidaModel = require("../models/maquina_individualModel");

function buscarUltimasMetrics(req, res) {
    medidaModel.buscarMetrics().then(function(resultado) {
        if (resultado.length > 0) {
            // Retorna as métricas de CPU para o front-end
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas métricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMetricasRede(req, res) {
    console.log("Rota /metricas-rede foi chamada");
    medidaModel.buscarMetricasRede().then(function(resultado) {
        if (resultado.length > 0) {
            console.log("Dados de rede encontrados:", resultado);
            res.status(200).json(resultado);
        } else {
            console.log("Nenhum dado encontrado para métricas de rede.");
            res.status(204).send("Nenhum resultado encontrado para as métricas de rede!");
        }
    }).catch(function(erro) {
        console.log("Erro ao buscar métricas de rede:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMetricas,
    buscarUltimasMetrics,
    buscarUltimasMetricasRede
};
