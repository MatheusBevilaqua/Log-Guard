var localidadesModel = require("../models/localidadesModel");

function visualizarLocalidades(req, res) {

  var instrucaoSql = req.body.instrucaoServer;

  localidadesModel.visualizarLocalidades(instrucaoSql).then(function (resultado) {
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

function exibirDadosEdicaoLocalidade(req, res) {
  var idLocalidade = req.body.idLocalidadeServer;
  localidadesModel.exibirDadosEdicaoLocalidade(idLocalidade).then(function (resultado) {
      if (resultado.length > 0) {
          res.json({
            nomeLocalidade: resultado[0].nomeLocalidade,
            CEP_localidade: resultado[0].CEP_localidade,
            rua_localidade: resultado[0].rua_localidade,
             
          });
      } else {
          res.status(204).send("Nenhum resultado encontrado!");
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  visualizarLocalidades,
  exibirDadosEdicaoLocalidade
}