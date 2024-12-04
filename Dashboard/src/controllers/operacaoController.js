var operacaoModel = require("../models/operacaoModel");

function visualizarFuncionarios(req, res) {

  var fkEmpresa = req.body.idEmpresaUsuarioServer;

  operacaoModel.visualizarFuncionarios(fkEmpresa).then(function (resultado) {
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

function melhorDesempenho(req, res) {
  var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

  operacaoModel.melhorDesempenho(idEmpresaUsuario).then(function (resultado) {
      if (resultado) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!");
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar o melhor desempenho: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}



module.exports = {
  visualizarFuncionarios,
  melhorDesempenho
}