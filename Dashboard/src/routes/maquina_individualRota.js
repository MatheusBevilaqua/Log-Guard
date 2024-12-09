var express = require("express");
var router = express.Router();
var maquinaInd = require("../controllers/maquina_individualController");

router.get("/metricas", function (req, res) {
    maquinaInd.buscarUltimasMetricas(req, res);
});

router.post("/metrics", function (req, res) {
    maquinaInd.buscarUltimasMetrics(req, res);
});

router.get("/metricasrede", function (req, res) {
    maquinaInd.buscarUltimasMetricasRede(req, res);
});

module.exports = router;
