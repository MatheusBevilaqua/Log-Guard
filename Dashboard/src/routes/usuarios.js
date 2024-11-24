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

router.post("/visualizarMaquinas", function (req, res) {
    usuarioController.visualizarMaquinas(req, res);
});

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

router.post("/deletarusuario", function (req, res) {
    usuarioController.deletarusuario(req, res);
});

router.post("/editarusuario", function (req, res) {
    usuarioController.editarusuario(req, res);
});

router.post("/cadastrarnovouser", function (req, res) {
    usuarioController.cadastrarnovouser(req, res);
});

router.post("/getMaquinasDataRAM", function (req, res) {
    usuarioController.getMaquinasDataRAM(req, res);
});

router.post("/getMaquinasDataCPU", function (req, res) {
    usuarioController.getMaquinasDataCPU(req, res);
});

router.post("/getMaquinasDataREDE", function (req, res) {
    usuarioController.getMaquinasDataREDE(req, res);
});

router.post("/getMaqemriscosemana/:idEmpresaUsuario", function (req, res) {
    usuarioController.getMaqemriscosemana(req, res);
});

router.post("/getAlertaSemana", function (req, res) {
    usuarioController.getAlertaSemana(req, res);
});




module.exports = router;