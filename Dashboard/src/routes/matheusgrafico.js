// configuração padrão para indicar o uso da biblioteca do node

var express = require("express");
var router = express.Router();

var matheusgraficoController = require("../controllers/matheusgraficoController");

router.post("/visualizarMaquinas", function (req, res) {
  matheusgraficoController.visualizarMaquinas(req, res);
});

router.post("/buscarCritico", function (req, res) {
  matheusgraficoController.buscarCritico(req, res);
})

router.post("/buscarComponentes", function (req, res) {
  matheusgraficoController.buscarComponentes(req, res);
})

router.post("/grafico", function (req, res) {
  matheusgraficoController.grafico(req, res);
})

module.exports = router;