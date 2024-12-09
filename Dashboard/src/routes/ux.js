var express = require("express");
var router = express.Router();
var uxController = require("../controllers/uxController"); // Importando o controlador

router.post("/inserir", function (req, res) {
    console.log("Rota /inserir foi acessada");
    uxController.inserir(req, res);
});

router.get("/listar", function (req, res) {
    uxController.listar(req, res);
});

router.get("/Funcionalidades", function (req, res) {
    console.log("Rota /funcionalidades foi acessada");
    uxController.Funcionalidades(req, res);
});

router.get("/totais", function (req, res) {
    console.log("Rota /totais foi acessada");
    uxController.totais(req, res);
});

router.get("/countFeedback", function (req, res) {
    console.log("Rota /countFeedback foi acessada");
    uxController.countFeedback(req, res);
});


module.exports = router;
