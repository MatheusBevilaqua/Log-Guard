var express = require("express");
var router = express.Router();

var operacaoController = require("../controllers/operacaoController");

router.post("/visualizarFuncionarios", function(req,res){
    operacaoController.visualizarFuncionarios(req, res);
  })

router.post("/melhorDesempenho", function (req, res) {
    operacaoController.melhorDesempenho(req, res);
});

  
module.exports = router;