var express = require("express");
var router = express.Router();

var localidadesController = require("../controllers/localidadesController");

router.post("/visualizarLocalidades", function(req,res){
    localidadesController.visualizarLocalidades(req, res);
  })

  router.post("/exibirDadosEdicaoLocalidade", function (req, res) {
    localidadesController.exibirDadosEdicaoLocalidade(req, res);
  });

  router.post("/cadastrarLocalidade", function (req, res) {
    localidadesController.cadastrarLocalidade(req, res);
  });

  router.post("/editarLocalidades", function (req, res) {
    localidadesController.editarLocalidades(req, res);
  });

  router.delete("/deletarLocalidade", function (req, res) {
    localidadesController.deletarLocalidade(req, res);
  });
  



  
module.exports = router;