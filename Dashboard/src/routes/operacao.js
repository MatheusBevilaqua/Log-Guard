var express = require("express");
var router = express.Router();

var operacaoController = require("../controllers/operacaoController");

router.post("/visualizarFuncionarios", function(req,res){
    operacaoController.visualizarFuncionarios(req, res);
  })

  
module.exports = router;