var express = require("express");
var router = express.Router();

var localidadesController = require("../controllers/localidadesController");

router.post("/visualizarLocalidades", function(req,res){
    localidadesController.visualizarLocalidades(req, res);
  })

  router.post("/exibirDadosEdicaoLocalidade", function (req, res) {
    localidadesController.exibirDadosEdicaoLocalidade(req, res);
  });

  router.post("/cadastrarLocalidade", function (req, res) {
    localidadesController.cadastrarLocalidade(req, res);
  });

  router.post("/editarLocalidades", function (req, res) {
    localidadesController.editarLocalidades(req, res);
  });

  router.delete("/deletarLocalidade", function (req, res) {
    localidadesController.deletarLocalidade(req, res);
  });
  //---------------------- COISAS DE CPU AQUI -----------------------------
  router.post("/usoCPUPorMaquinaLocalidade", function(req,res){
    localidadesController.usoCPUPorMaquinaLocalidade(req, res);
  })

  router.get("/usoCPUTempo/:idLocalidadeAtual", function (req, res) {
    localidadesController.usoCPUTempo(req, res);
});

router.get("/tempo-real/:idLocalidadeAtual", function (req, res) {
  localidadesController.buscarMedidasEmTempoReal(req, res);
});

router.post("/porcentagemUsoCPULocalidade", function(req,res){
  localidadesController.porcentagemUsoCPULocalidade(req, res);
});

router.post("/quantidadeLocalidade", function(req,res){
  localidadesController.quantidadeLocalidade(req, res);
});

router.post("/qtdEmAlertaCPULocalidade", function(req,res){
  localidadesController.qtdEmAlertaCPULocalidade(req, res);
});

//-----------------------------COISAS DE RAM AQUI ------------------------------
router.post("/porcentagemUsoMemoriaLocalidade", function(req,res){
  localidadesController.porcentagemUsoMemoriaLocalidade(req, res);
});

router.post("/qtdEmAlertaMemoriaLocalidade", function(req,res){
  localidadesController.qtdEmAlertaMemoriaLocalidade(req, res);
});

router.post("/usoMemoriaPorMaquinaLocalidade", function(req,res){
  localidadesController.usoMemoriaPorMaquinaLocalidade(req, res);
})

router.get("/usoMemoriaTempo/:idLocalidadeAtual", function (req, res) {
  localidadesController.usoMemoriaTempo(req, res);
});

router.get("/tempo-real-ram/:idLocalidadeAtual", function (req, res) {
  localidadesController.buscarMedidasEmTempoRealRam(req, res);
});

//-----------------------------COISAS DE DISCO AQUI ------------------------------

router.post("/porcentagemUsoDiscoLocalidade", function(req,res){
  localidadesController.porcentagemUsoDiscoLocalidade(req, res);
});

router.post("/qtdEmAlertaDiscoLocalidade", function(req,res){
  localidadesController.qtdEmAlertaDiscoLocalidade(req, res);
});

router.post("/usoDiscoPorMaquinaLocalidade", function(req,res){
  localidadesController.usoDiscoPorMaquinaLocalidade(req, res);
})

router.get("/usoDiscoTempo/:idLocalidadeAtual", function (req, res) {
  localidadesController.usoDiscoTempo(req, res);
});

//-----------------------------COISAS DE REDE!! AQUI ------------------------------

router.post("/porcentagemPerdaPacotesLocalidade", function(req,res){
  localidadesController.porcentagemPerdaPacotesLocalidade(req, res);
});

router.post("/usoBandaLocalidade", function(req,res){
  localidadesController.usoBandaLocalidade(req, res);
});


router.post("/usoBandaPorMaquinaLocalidade", function(req,res){
  localidadesController.usoBandaPorMaquinaLocalidade(req, res);
});

router.post("/usoBandaPorMaquinaLocalidade", function(req,res){
  localidadesController.usoBandaPorMaquinaLocalidade(req, res);
});

router.get("/usoRedeTempo/:idLocalidadeAtual", function (req, res) {
  localidadesController.usoRedeTempo(req, res);
});

router.get("/tempo-real-rede/:idLocalidadeAtual", function (req, res) {
  localidadesController.buscarMedidasEmTempoRealRede(req, res);
});



module.exports = router;