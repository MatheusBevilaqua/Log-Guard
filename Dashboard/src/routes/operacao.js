var express = require("express");
var router = express.Router();

var operacaoController = require("../controllers/operacaoController");

router.post("/visualizarFuncionarios", function(req,res){
    operacaoController.visualizarFuncionarios(req, res);
  })

router.post("/melhorDesempenho", function (req, res) {
    operacaoController.melhorDesempenho(req, res);
});

  
router.post("/exibirGrafico", function (req, res) {
  operacaoController.exibirGrafico(req, res);
});

router.get("/verRelatorio", function (req, res) {
  operacaoController.verRelatorio(req, res);
});


module.exports = router;