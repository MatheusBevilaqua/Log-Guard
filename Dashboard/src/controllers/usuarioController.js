var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var emaiUsuario = req.body.emailServer;
    var senhaUsuario = req.body.senhaServer;

    if (emaiUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(emaiUsuario, senhaUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.autenticar(emaiUsuario, senhaUsuario)
                            .then((resultadoAutenticar) => {
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        emailUsuario: resultadoAutenticar[0].emailUsuario,
                                        fkEmpresaUsuario: resultadoAutenticar[0].empresaId,
                                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        tipoPerfilUsuario: resultadoAutenticar[0].tipoPerfilUsuario,
                                        senhaUsuario: resultadoAutenticar[0].senhaUsuario
                                    });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var fkEmpresaUsuario = req.body.empresaUsuarioServer;
    var tipoPerfilUsuario = req.body.tipoUsuariosServer;

    // Faça as validações dos valores
    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresaUsuario == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeUsuario, emailUsuario, senhaUsuario, fkEmpresaUsuario, tipoPerfilUsuario)
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

function visualizarUsuarios(req, res) {

    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.visualizarUsuarios(idEmpresaUsuario).then(function (resultado) {
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

function visualizarMaquinas(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;
    usuarioModel.visualizarMaquinas(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function visualizarUsuariosADM(req, res) {

    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.visualizarUsuariosADM(idEmpresaUsuario).then(function (resultado) {
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

function visualizarUsuariosCOMUM(req, res) {

    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.visualizarUsuariosCOMUM(idEmpresaUsuario).then(function (resultado) {
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

function totalfunc(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;
    usuarioModel.totalfunc(idEmpresaUsuario).then(function (total) {
        res.status(200).json(total);
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function totaladms(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;
    console.log("ID da Empresa:", idEmpresaUsuario);
    usuarioModel.totaladms(idEmpresaUsuario).then(function (total) {
        console.log("Total de administradores do banco:", total);
        res.status(200).json(total);
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function totalanalista(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;
    console.log("ID da Empresa:", idEmpresaUsuario);
    usuarioModel.totalanalista(idEmpresaUsuario).then(function (total) {
        console.log("Total de analistas do banco:", total);
        res.status(200).json(total);
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirDadosEdicaoUsuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.exibirDadosEdicaoUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.json({
                nomeUsuario: resultado[0].nomeUsuario,
                emailUsuario: resultado[0].emailUsuario,
                tipoPerfilUsuario: resultado[0].tipoPerfilUsuario,
                senhaUsuario: resultado[0].senhaUsuario
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function deletarusuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.deletarusuario(idUsuario).then(function (resultado) {
        if (resultado.affectedRows > 0) {
            res.status(200).json({ mensagem: "Usuário desativado com sucesso" });
        } else {
            res.status(404).send("Nenhum usuário encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao deletar o usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function editarusuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var nomeUsuario = req.body.nomeUsuario;
    var emailUsuario = req.body.emailUsuario;
    var senhaUsuario = req.body.senhaUsuario;
    var tipoPerfilUsuario = req.body.tipoPerfilUsuario;

    usuarioModel.editarusuario(idUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario).then(function (resultado) {
        if (resultado.affectedRows > 0) {
            res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });
        } else {
            res.status(404).send("Nenhum usuário encontrado");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao atualizar o usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarnovouser(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var fkEmpresaUsuario = req.body.empresaUsuarioServer;
    var tipoPerfilUsuario = req.body.tipoUsuariosServer;

    // Faça as validações dos valores
    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresaUsuario == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeUsuario, emailUsuario, senhaUsuario, fkEmpresaUsuario, tipoPerfilUsuario)
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

function getMaquinasDataRAM(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.getMaquinasDataRAM(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                console.log('Processando linha:', row);
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = [];
                }
                maquinasMap[nomeMaquina].push({
                    x: dataCaptura,
                    y: parseFloat(row.registro)
                });
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: maquinasMap[maquina]
            }));

            console.log('Dados processados para o gráfico RAM:', series);
            res.status(200).json(series);
        } else {
            console.log("Nenhum resultado encontrado!");
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





function getMaquinasDataCPU(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.getMaquinasDataCPU(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = {};
                }
                if (!maquinasMap[nomeMaquina][dataCaptura]) {
                    maquinasMap[nomeMaquina][dataCaptura] = { total: 0, count: 0 };
                }
                maquinasMap[nomeMaquina][dataCaptura].total += parseFloat(row.registro);
                maquinasMap[nomeMaquina][dataCaptura].count += 1;
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: Object.keys(maquinasMap[maquina]).map(data => ({
                    x: data,
                    y: parseFloat((maquinasMap[maquina][data].total / maquinasMap[maquina][data].count).toFixed(2))
                }))
            }));

            console.log('Dados processados para o gráfico CPU:', series);
            res.status(200).json(series);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function getMaquinasDataREDE(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    usuarioModel.getMaquinasDataREDE(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = {};
                }
                if (!maquinasMap[nomeMaquina][dataCaptura]) {
                    maquinasMap[nomeMaquina][dataCaptura] = { total: 0, count: 0 };
                }
                maquinasMap[nomeMaquina][dataCaptura].total += parseFloat(row.registro);
                maquinasMap[nomeMaquina][dataCaptura].count += 1;
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: Object.keys(maquinasMap[maquina]).map(data => ({
                    x: data,
                    y: parseFloat((maquinasMap[maquina][data].total / maquinasMap[maquina][data].count).toFixed(2))
                }))
            }));

            console.log('Dados processados para o gráfico REDE:', series);
            res.status(200).json(series);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function getMaqemriscosemana(req, res) {
    const { idEmpresaUsuario } = req.body;
    console.log("Chamada para getMaqemriscosemana com idEmpresaUsuario:", idEmpresaUsuario);

    usuarioModel.getMaqemriscosemana(idEmpresaUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(404).send("Nenhum dado encontrado para máquinas em risco na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar máquinas em risco:", erro);
            res.status(500).json(erro);
        });
}


function getAlertaSemana(req, res) {
    const { idEmpresaUsuario } = req.body;
    console.log("Chamada para getAlertaSemana com idEmpresaUsuario:", idEmpresaUsuario);

    usuarioModel.getAlertaSemana(idEmpresaUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                const dadosFormatados = resultado.map(dado => {
                    return {
                        ...dado,
                        Data: new Date(dado.Data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) + ' ' + new Date(dado.Data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                        Alerta: `${parseFloat(dado.Alerta).toFixed(0)}%`,
                        Parametro: `${parseFloat(dado.Parametro).toFixed(0)}%`
                    };
                });
                res.status(200).json(dadosFormatados);
            } else {
                res.status(404).send("Nenhum dado encontrado para alertas de máquinas na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar alertas das máquinas:", erro);
            res.status(500).json(erro);
        });
}





module.exports = {
    getAlertaSemana,
    getMaqemriscosemana,
    autenticar,
    cadastrar,
    visualizarUsuarios,
    visualizarUsuariosADM,
    visualizarUsuariosCOMUM,
    totalfunc,
    totaladms,
    totalanalista,
    exibirDadosEdicaoUsuario,
    deletarusuario,
    editarusuario, 
    cadastrarnovouser,
    visualizarMaquinas,
    getMaquinasDataRAM,
    getMaquinasDataCPU,
    getMaquinasDataREDE
};
