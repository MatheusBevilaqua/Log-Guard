var express = require("express");
var router = express.Router();

var admController = require("../controllers/admController");

router.post("/getMaquinasDataRAM", function (req, res) {
    admController.getMaquinasDataRAM(req, res);
});

router.post("/getMaquinasDataCPU", function (req, res) {
    admController.getMaquinasDataCPU(req, res);
});

router.post("/getMaquinasDataREDE", function (req, res) {
    admController.getMaquinasDataREDE(req, res);
});

router.post("/getAlertaSemana", function (req, res) {
    admController.getAlertaSemana(req, res);
});

router.post("/getRiscoSemanal/:idEmpresaUsuario", function (req, res) {
    admController.getRiscoSemanal(req, res);
});

router.post("/getAlertasPorDia", function (req, res) {
    admController.getAlertasPorDia(req, res);
});

router.get("/getProbabilidadeCPU", function (req, res) {
    admController.getProbabilidadeCPU(req, res);
});

router.get("/getProbabilidadeRAM", function (req, res) {
    admController.getProbabilidadeRAM(req, res);
});

router.get("/getProbabilidadeDISCO", function (req, res) {
    admController.getProbabilidadeDISCO(req, res);
});


module.exports = router;