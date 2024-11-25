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
  var idMaquina = req.body.idMaquinaServer;
  localidadesModel.exibirDadosEdicaoLocalidade(idMaquina).then(function (resultado) {
      if (resultado.length > 0) {
          res.json({
              nomeMaquina: resultado[0].nomeMaquina,
              modeloCPU: resultado[0].modeloCPU,
              capacidadeRAM: resultado[0].capacidadeRAM,
              disco: resultado[0].disco,
              localidade: resultado[0].localidade,
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