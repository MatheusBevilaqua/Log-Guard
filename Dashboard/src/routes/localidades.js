var express = require("express");
var router = express.Router();

var localidadesController = require("../controllers/localidadesController");

router.post("/visualizarLocalidades", function(req,res){
    localidadesController.visualizarLocalidades(req, res);
  })


  router.post("/exibirDadosEdicaoLocalidade", function (req, res) {
    localidadesController.exibirDadosEdicaoLocalidade(req, res);
  });

  
module.exports = router;