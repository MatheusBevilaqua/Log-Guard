var express = require("express");
var router = express.Router();

var relatorioController = require("../controllers/relatorioController");

router.get("/listar", function (req, res) {
    relatorioController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    relatorioController.listarPorUsuario(req, res);
});


router.post("/publicar/:idUsuario", function (req, res) {
    relatorioController.publicar(req, res);
});

router.put("/editar/:idrelatorio", function (req, res) {
    relatorioController.editar(req, res);
});

router.delete("/deletar/:idrelatorio", function (req, res) {
    relatorioController.deletar(req, res);
});

module.exports = router;