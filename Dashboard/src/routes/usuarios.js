var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/visualizarUsuarios", function (req, res) {
    usuarioController.visualizarUsuarios(req, res);
})

router.post("/visualizarUsuariosADM", function (req, res) {
    usuarioController.visualizarUsuariosADM(req, res);
})

router.post("/visualizarUsuariosCOMUM", function (req, res) {
    usuarioController.visualizarUsuariosCOMUM(req, res);
})

router.post("/totalfunc", function (req, res) {
    usuarioController.totalfunc(req, res);
});

router.post("/totalanalista", function (req, res) {
    usuarioController.totalanalista(req, res);
});

router.post("/totaladms", function (req, res) {
    usuarioController.totaladms(req, res);
});

router.post("/exibirDadosEdicaoUsuario", function (req, res) {
    usuarioController.exibirDadosEdicaoUsuario(req, res);
});


module.exports = router;