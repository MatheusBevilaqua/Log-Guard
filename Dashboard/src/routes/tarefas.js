var express = require("express");
var router = express.Router();

var tarefasController = require("../controllers/tarefasController");

router.post("/contabilizaTarefas", function (req, res) {
    tarefasController.contabilizaTarefas(req, res);
})

module.exports = router;