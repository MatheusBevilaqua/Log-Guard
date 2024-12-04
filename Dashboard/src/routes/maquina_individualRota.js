var express = require("express");
var router = express.Router();

router.get("/ultimasCPU/", function (req, res) {
    medidaController.buscarMedidasCPU(req, res);
});

router.get("/tempoRealCPU/", function (req, res) {
    medidaController.tempoRealCPU(req, res);
});



module.exports = router;