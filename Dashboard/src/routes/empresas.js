var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  empresaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

router.get("/visualizarEmpresas", function(req,res){
  empresaController.visualizarEmpresas(req, res);
})

router.post("/confirmar_cadastrar", function (req, res) {
  empresaController.confirmar_cadastrar(req, res);
});
// router.get("/excluir_editar", function (req, res) {
//   empresaController.listar(req, res);
// });
// router.get("/confirmar_editar", function (req, res) {
//   empresaController.listar(req, res);
// });


module.exports = router;
