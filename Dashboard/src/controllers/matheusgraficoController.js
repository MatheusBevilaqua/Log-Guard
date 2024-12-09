var matheusgraficoModel = require("../models/matheusgraficoModel")

function visualizarMaquinas(req, res) {
// Variavel para pegar o Id da empresa 
var idEmpresaMaquina = req.body.idEmpresaMaquinaServer;
  
    matheusgraficoModel.visualizarMaquinas(idEmpresaMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
  }

  
  function buscarCritico(req, res) {
      var idEmpresaMaquina = req.body.idEmpresaMaquinaServer;
      
      matheusgraficoModel.buscarCritico(idEmpresaMaquina).then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
            } else {
              res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
        });
    }
    
    function buscarComponentes(req, res) {

        var idEmpresaMaquina = req.body.idEmpresaMaquinaServer;

        matheusgraficoModel.buscarComponentes(idEmpresaMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function listar(req, res) {
        var idEmpresaMaquina = req.body.idEmpresaMaquinaServer;

        matheusgraficoModel.listar(idEmpresaMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }



    module.exports = {
      visualizarMaquinas,
      buscarCritico,
      buscarComponentes
}