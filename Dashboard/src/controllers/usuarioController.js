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
                nomeUsuario: resultado[0].nomeUsuario
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





module.exports = {
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

};
