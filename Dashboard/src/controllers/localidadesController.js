var localidadesModel = require("../models/localidadesModel");

function visualizarLocalidades(req, res) {

  var fkEmpresa = req.body.idEmpresaUsuarioServer;

  localidadesModel.visualizarLocalidades(fkEmpresa).then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });

}

function exibirDadosEdicaoLocalidade(req, res) {
  var idLocalidade = req.body.idLocalidadeServer;
  localidadesModel.exibirDadosEdicaoLocalidade(idLocalidade).then(function (resultado) {
      if (resultado.length > 0) {
          res.json({
            nomeLocalidade: resultado[0].nomeLocalidade,
            CEP_localidade: resultado[0].CEP_localidade,
            rua_localidade: resultado[0].rua_localidade,
            parametro_taxa_uso_bl: resultado[0].parametro_taxa_uso_bl,
            parametro_perda_pacotes: resultado[0].parametro_perda_pacotes
      
          });
      } else {
          res.status(204).send("Nenhum resultado encontrado!");
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

function cadastrarLocalidade(req, res){
  var nomeLocalidade = req.body.nomeLocalidadeServer;
  var CEPLocalidade = req.body.CEPLocalidadeServer;
  var rua = req.body.ruaServer;
  var bandaLarga = req.body.bandaLargaServer;
  var parametroPacotes = req.body.parametroPacotesServer;
  var fkEmpresaLocalidade = req.body.fkEmpresaLocalidadeServer;
  
  if (nomeLocalidade == undefined) {
    res.status(400).send("Seu nomeLocalidade está undefined!");
} else if (CEPLocalidade == undefined) {
    res.status(400).send("Seu CEPLocalidade está undefined!");
} else if (rua == undefined) {
    res.status(400).send("Sua rua está undefined!");
} else if (bandaLarga == undefined) {
    res.status(400).send("Sua bandaLarga a vincular está undefined!");
} else if (parametroPacotes == undefined) {
  res.status(400).send("Sua parametroPacotes a vincular está undefined!");
} else if (fkEmpresaLocalidade == undefined) { 
    res.status(400).send("Sua fkEmpresaLocalidade a vincular está undefined!");
  }
     else {

      localidadesModel.cadastrarLocalidade(fkEmpresaLocalidade,nomeLocalidade,CEPLocalidade,rua,bandaLarga,parametroPacotes)
      .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
   
    }

    function editarLocalidades(req, res) {

      var idLocalidade = req.body.idLocalidadeServer;
      var nomeLocalidade = req.body.nomeLocalidadeServer;
      var CEP = req.body.CEPServer;
      var rua =req.body.ruaServer;
      var banda = req.body.bandaServer;
      var Pacotes = req.body.PacotesServer;
    
      localidadesModel.editarLocalidades(idLocalidade,nomeLocalidade,CEP,rua,banda,Pacotes).then(function (resultado) {
          if (resultado.affectedRows > 0) {
              res.status(200).json({ mensagem: "Máquina Localidade com sucesso" });
          } else {
              res.status(404).send("Nenhuma Localidade encontrada");
          }
      }).catch(function (erro) {
          console.log("Houve um erro ao atualizar a máquina: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
    }

    function deletarLocalidade(req, res) {
      var idLocalidade = req.body.id_localidadeServer;
      localidadesModel.deletarLocalidade(idLocalidade).then(function (resultado) {
          if (resultado.affectedRows > 0) {
              res.status(200).json({ mensagem: "Máquina deletada com sucesso" });
          } else {
              res.status(404).send("Nenhuma máquina encontrada");
          }
      }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao deletar o usuário: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
    }

    function usoCPUPorMaquinaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.usoCPUPorMaquinaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }


      function usoCPUTempo(req, res) {

        const limite_linhas = 7;
    
        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando as ultimas ${limite_linhas} capturas`);
    
        localidadesModel.usoCPUTempo(idLocalidade, limite_linhas).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function buscarMedidasEmTempoReal(req, res) {

        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando medidas em tempo real`);
    
        localidadesModel.buscarMedidasEmTempoReal(idLocalidade).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function porcentagemUsoCPULocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.porcentagemUsoCPULocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      
    function quantidadeLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.quantidadeLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      function qtdEmAlertaCPULocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.qtdEmAlertaCPULocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      function porcentagemUsoMemoriaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.porcentagemUsoMemoriaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }


      function qtdEmAlertaMemoriaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.qtdEmAlertaMemoriaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      function usoMemoriaPorMaquinaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.usoMemoriaPorMaquinaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }


      function usoMemoriaTempo(req, res) {

        const limite_linhas = 7;
    
        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando as ultimas ${limite_linhas} capturas`);
    
        localidadesModel.usoMemoriaTempo(idLocalidade, limite_linhas).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function buscarMedidasEmTempoRealRam(req, res) {

        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando medidas em tempo real`);
    
        localidadesModel.buscarMedidasEmTempoRealRam(idLocalidade).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }


    function porcentagemUsoDiscoLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.porcentagemUsoDiscoLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

    function qtdEmAlertaDiscoLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.qtdEmAlertaDiscoLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

    function usoDiscoPorMaquinaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.usoDiscoPorMaquinaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

    function usoDiscoTempo(req, res) {

        const limite_linhas = 7;
    
        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando as ultimas ${limite_linhas} capturas`);
    
        localidadesModel.usoDiscoTempo(idLocalidade, limite_linhas).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function porcentagemPerdaPacotesLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.porcentagemPerdaPacotesLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      function usoBandaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.usoBandaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }


      function usoBandaPorMaquinaLocalidade(req, res) {

        var fkLocalidadeMaquina = req.body.idLocalidadeServer;
      
        localidadesModel.usoBandaPorMaquinaLocalidade(fkLocalidadeMaquina).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
      
      }

      function usoRedeTempo(req, res) {

        const limite_linhas = 7;
    
        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando as ultimas ${limite_linhas} capturas`);
    
        localidadesModel.usoRedeTempo(idLocalidade, limite_linhas).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function buscarMedidasEmTempoRealRede(req, res) {

        var idLocalidade = req.params.idLocalidadeAtual;
    
        console.log(`Recuperando medidas em tempo real`);
    
        localidadesModel.buscarMedidasEmTempoRealRede(idLocalidade).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }



module.exports = {
  visualizarLocalidades,
  exibirDadosEdicaoLocalidade,
  cadastrarLocalidade,
  editarLocalidades,
  deletarLocalidade,
  usoCPUPorMaquinaLocalidade,
  usoCPUTempo,
  buscarMedidasEmTempoReal,
  porcentagemUsoCPULocalidade,
  quantidadeLocalidade,
  qtdEmAlertaCPULocalidade,
  porcentagemUsoMemoriaLocalidade,
  qtdEmAlertaMemoriaLocalidade,
  usoMemoriaPorMaquinaLocalidade,
  usoMemoriaTempo,
  buscarMedidasEmTempoRealRam,
  porcentagemUsoDiscoLocalidade,
  qtdEmAlertaDiscoLocalidade,
  usoDiscoPorMaquinaLocalidade,
  usoDiscoTempo,
  porcentagemPerdaPacotesLocalidade,
  usoBandaLocalidade,
  usoBandaPorMaquinaLocalidade,
  usoRedeTempo,
  buscarMedidasEmTempoRealRede
}