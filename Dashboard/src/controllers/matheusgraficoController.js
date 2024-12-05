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
        var qtdCPU = req.body.cpuServer;
        var qtdRAM = req.body.ramServer;
        var qtdDisco = req.body.discoServer;
        var probCPU = req.body.probcpuServer;
        var probRAM = req.body.probramServer;
        var probDisco = req.body.probServer;

        matheusgraficoModel.buscarComponentes(idEmpresaMaquina, qtdCPU, qtdRAM, qtdDisco, probCPU,probRAM, probDisco).then(function (resultado) {
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

    function Graficos(req, res) {
        var usoCPU = req.body.cpuServer;
        var usoRAM = req.body.ramServer;
        var usoDisco = req.body.discoServer;
    
        matheusgraficoModel.Graficos( ).then(function (resultado) {
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
      buscarCritico
    // buscarComponentes,
    // Graficos
}