

const idEmpresaUsuario = sessionStorage.EMPRESA_USUARIO




//barra lateral

//a
function abremodal() {
    document.querySelector('.sessao-adm-modal-todos').style.display = "flex";
    document.querySelector('.sessao-adm-modal-card').style.display = "flex";
}

function abremodalalerta() {
    document.querySelector('.sessao-adm-modal-alertas').style.display = "flex";
}

function abremodalrisco() {
    document.querySelector('.sessao-adm-modal-riscos').style.display = "flex";
}

function abremodalanalise() {
    document.querySelector('.sessao-adm-modal-analise').style.display = "flex";
    document.querySelector('.histogramChart').style.display = "flex";
}

function cancelar_modal() {
    document.querySelector('.sessao-adm-modal-todos').style.display = "none";
    document.querySelector('.sessao-adm-modal-card').style.display = "none";
    document.querySelector('.sessao-adm-modal-analise').style.display = "none";
    document.querySelector('.sessao-adm-modal-riscos').style.display = "none";
    document.querySelector('.sessao-adm-modal-alertas').style.display = "none";
}

//a

//b

function cpu_adm_sessao3() {
    document.querySelector('.sessao-adm-chartcpu-dado').style.display = "block";
    document.querySelector('.sessao-adm-chartram-dado').style.display = "none";
    document.querySelector('.sessao-adm-chartrede-dado').style.display = "none";
}

function ram_adm_sessao3() {
    document.querySelector('.sessao-adm-chartcpu-dado').style.display = "none";
    document.querySelector('.sessao-adm-chartram-dado').style.display = "block";
    document.querySelector('.sessao-adm-chartrede-dado').style.display = "none";
}

function rede_adm_sessao3() {
    document.querySelector('.sessao-adm-chartcpu-dado').style.display = "none";
    document.querySelector('.sessao-adm-chartram-dado').style.display = "none";
    document.querySelector('.sessao-adm-chartrede-dado').style.display = "block";
}

//b


//c

function cpu_adm_probabilidade() {
    document.querySelector('.probabilityChartCPU').style.display = "block";
    document.querySelector('.probabilityChartRAM').style.display = "none";
    document.querySelector('.probabilityChartDISCO').style.display = "none";
}

function ram_adm_probabilidade() {
    document.querySelector('.probabilityChartCPU').style.display = "none";
    document.querySelector('.probabilityChartRAM').style.display = "block";
    document.querySelector('.probabilityChartDISCO').style.display = "none";
}

function disco_adm_probabilidade() {
    document.querySelector('.probabilityChartCPU').style.display = "none";
    document.querySelector('.probabilityChartRAM').style.display = "none";
    document.querySelector('.probabilityChartDISCO').style.display = "block";
}

//c



// maquinas em risco listagem

function obterMaquinasEmRisco() {
    const idEmpresaUsuario = sessionStorage.EMPRESA_USUARIO;
    console.log("idEmpresaUsuario na função obterMaquinasEmRisco:", idEmpresaUsuario);

    fetch(`usuarios/getMaqemriscosemana/${idEmpresaUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idEmpresaUsuario: idEmpresaUsuario
        }),
    })
        .then(function (resposta) {
            console.log("Resposta da requisição:", resposta);

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    console.log("Dados recebidos do servidor:", dados);

                    var tabela = document.querySelector('.sessao-adm-modal-riscos table');

                    if (tabela) {
                        // Limpa a tabela antes de inserir novas linhas
                        while (tabela.rows.length > 1) {
                            tabela.deleteRow(1);
                        }

                        dados.forEach(function (dado) {
                            var linha = tabela.insertRow();
                            var celulaMaquina = linha.insertCell(0);
                            var celulaLocalidade = linha.insertCell(1);
                            var celulaQuantidadeAlertas = linha.insertCell(2);

                            celulaMaquina.textContent = dado.nomeMaquina;
                            celulaLocalidade.textContent = dado.Localidade;
                            celulaQuantidadeAlertas.textContent = dado.quantidade_alertas;
                        });

                        var mainPage = document.querySelector('.maingerenpage');
                        var modalRiscos = document.querySelector('.sessao-adm-modal-riscos');

                        if (mainPage) {
                            mainPage.style.filter = "blur(5px)";
                        }

                        if (modalRiscos) {
                            modalRiscos.style.display = "block";
                        }
                    } else {
                        console.error("Tabela não encontrada no DOM.");
                    }
                });
            } else {
                console.error("Erro na requisição. Status:", resposta.status, resposta.statusText);
                alert("Erro ao obter máquinas em risco. Tente novamente mais tarde.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao tentar buscar os dados das máquinas:", erro);
            alert("Erro na conexão com o servidor. Verifique sua rede e tente novamente.");
        });

    return false;
}


// maquinas em risco listagem




// alerta semana

function getAlertaSemana() {
    const idEmpresaUsuario = sessionStorage.EMPRESA_USUARIO;
    console.log("idEmpresaUsuario na função getAlertaSemana:", idEmpresaUsuario);

    fetch(`usuarios/getAlertaSemana`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ idEmpresaUsuario }),
    })
        .then(function (resposta) {
            console.log("Resposta da requisição:", resposta);

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    console.log("Dados recebidos do servidor:", dados);

                    var dadosFormatados = formatarDadosAlertas(dados);

                    var tabela = document.querySelector('.sessao-adm-modal-alertas table');

                    if (tabela) {
                        // Limpa a tabela antes de inserir novas linhas
                        while (tabela.rows.length > 1) {
                            tabela.deleteRow(1);
                        }

                        dadosFormatados.forEach(function (dado) {
                            var linha = tabela.insertRow();
                            var celulaData = linha.insertCell(0);
                            var celulaMaquina = linha.insertCell(1);
                            var celulaLocalidade = linha.insertCell(2);
                            var celulaComponente = linha.insertCell(3);
                            var celulaAlerta = linha.insertCell(4);
                            var celulaParametro = linha.insertCell(5);

                            celulaData.textContent = dado.Data;
                            celulaMaquina.textContent = dado.Máquina;
                            celulaLocalidade.textContent = dado.Localidade;
                            celulaComponente.textContent = dado.Componente;
                            celulaAlerta.textContent = dado.Alerta;
                            celulaParametro.textContent = dado.Parametro;
                        });

                        var mainPage = document.querySelector('.maingerenpage');
                        var modalAlertas = document.querySelector('.sessao-adm-modal-alertas');

                        if (mainPage) {
                            mainPage.style.filter = "blur(5px)";
                        }

                        if (modalAlertas) {
                            modalAlertas.style.display = "block";
                        }
                    } else {
                        console.error("Tabela não encontrada no DOM.");
                    }
                });
            } else {
                console.error("Erro na requisição. Status:", resposta.status, resposta.statusText);
                alert("Erro ao obter alertas semanais. Tente novamente mais tarde.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao tentar buscar os dados dos alertas:", erro);
            alert("Erro na conexão com o servidor. Verifique sua rede e tente novamente.");
        });

    return false;
}

function formatarDadosAlertas(dados) {
    return dados.map(dado => {
        return {
            ...dado,
            Data: dado.Data,
            Alerta: dado.Alerta,
            Parametro: dado.Parametro
        };
    });
}











// alerta semana






//MAPA DE CALOR


//ram

document.addEventListener('DOMContentLoaded', function () {
    fetch('usuarios/getMaquinasDataRAM', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idEmpresaUsuarioServer: idEmpresaUsuario
        })
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var optionsRAM = {
                chart: {
                    height: 190,
                    width: 1210,
                    type: 'heatmap',
                },
                series: data,
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 38,
                                    name: 'Baixo',
                                    color: '#a69cd6'
                                },
                                {
                                    from: 38,
                                    to: 70,
                                    name: 'Médio',
                                    color: '#7265b3'
                                },
                                {
                                    from: 70,
                                    to: 90,
                                    name: 'Alto',
                                    color: '#442BB3'
                                },
                                {
                                    from: 90,
                                    to: 100,
                                    name: 'Muito Alto',
                                    color: '#2b1f64'
                                }
                            ]
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                },
                tooltip: {
                    theme: 'dark'
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                }
            };

            var chartRAM = new ApexCharts(document.querySelector("#chartRAM"), optionsRAM);
            chartRAM.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});







//cpu
document.addEventListener('DOMContentLoaded', function () {
    fetch('usuarios/getMaquinasDataCPU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idEmpresaUsuarioServer: idEmpresaUsuario
        })
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var optionsCPU = {
                chart: {
                    height: 200,
                    width: 1210,
                    type: 'heatmap',
                },
                series: data,
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 38,
                                    name: 'Baixo',
                                    color: '#a69cd6'
                                },
                                {
                                    from: 38,
                                    to: 70,
                                    name: 'Médio',
                                    color: '#7265b3'
                                },
                                {
                                    from: 70,
                                    to: 90,
                                    name: 'Alto',
                                    color: '#442BB3'
                                },
                                {
                                    from: 90,
                                    to: 100,
                                    name: 'Muito Alto',
                                    color: '#2b1f64'
                                }
                            ]
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                },
                tooltip: {
                    theme: 'dark'
                },
                legend: {
                    show: true,
                    position: 'right',
                    horizontalAlign: 'center'
                }
            };

            var chartCPU = new ApexCharts(document.querySelector("#chartCPU"), optionsCPU);
            chartCPU.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
//cpu




//rede
document.addEventListener('DOMContentLoaded', function () {
    fetch('usuarios/getMaquinasDataREDE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idEmpresaUsuarioServer: idEmpresaUsuario
        })
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var optionsREDE = {
                chart: {
                    height: 188,
                    width: 1200,
                    type: 'heatmap',
                },
                series: data,
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 38,
                                    name: 'Baixo',
                                    color: '#a69cd6'
                                },
                                {
                                    from: 38,
                                    to: 70,
                                    name: 'Médio',
                                    color: '#7265b3'
                                },
                                {
                                    from: 70,
                                    to: 90,
                                    name: 'Alto',
                                    color: '#442BB3'
                                },
                                {
                                    from: 90,
                                    to: 100,
                                    name: 'Muito Alto',
                                    color: '#2b1f64'
                                }
                            ]
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                },
                tooltip: {
                    theme: 'dark'
                },
                legend: {
                    show: true,
                    position: 'right',
                    horizontalAlign: 'center'
                }
            };

            var chartREDE = new ApexCharts(document.querySelector("#chartREDE"), optionsREDE);
            chartREDE.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
//rede




// GRAFICO PROBABILIDADE CPU
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        chart: {
            type: 'line',
            height: 200,
            width: 675
        },
        series: [{
            color: '#442BB3',
            name: 'Probabilidade',
            data: [0.05, 0.1, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9, 0.9] // Dados de exemplo
        }],
        xaxis: {
            categories: ['Evento1', 'Evento2', 'Evento3', 'Evento4', 'Evento5', 'Evento6', 'Evento7', 'Evento8', 'Evento9'] // Eventos de exemplo
        },
        tooltip: {
            theme: 'dark',
        },
    };


    var chart = new ApexCharts(document.querySelector("#probabilityChart"), options);

    chart.render();
});
// GRAFICO PROBABILIDADE CPU


// GRAFICO PROBABILIDADE RAM
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        chart: {
            type: 'line',
            height: 200,
            width: 675
        },
        series: [{
            color: '#442BB3',
            name: 'Probabilidade',
            data: [0.05, 0.1, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9, 0.9] // Dados de exemplo
        }],
        xaxis: {
            categories: ['Evento1', 'Evento2', 'Evento3', 'Evento4', 'Evento5', 'Evento6', 'Evento7', 'Evento8', 'Evento9'] // Eventos de exemplo
        },
        tooltip: {
            theme: 'dark',
        },
    };


    var chart = new ApexCharts(document.querySelector("#probabilityChartR"), options);

    chart.render();
});
// GRAFICO PROBABILIDADE RAM

// GRAFICO PROBABILIDADE DISCO
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        chart: {
            type: 'line',
            height: 200,
            width: 675
        },
        series: [{
            color: '#442BB3',
            name: 'Probabilidade',
            data: [0.05, 0.1, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9, 0.9] // Dados de exemplo
        }],
        xaxis: {
            categories: ['Evento1', 'Evento2', 'Evento3', 'Evento4', 'Evento5', 'Evento6', 'Evento7', 'Evento8', 'Evento9'] // Eventos de exemplo
        },
        tooltip: {
            theme: 'dark',
        },
    };


    var chart = new ApexCharts(document.querySelector("#probabilityChartD"), options);

    chart.render();
});
// GRAFICO PROBABILIDADE DISCO


// GRAFICO HISTOGRAMA

document.addEventListener('DOMContentLoaded', function () {
    var options = {
        series: [{
            name: 'Frequency',
            data: [10, 15, 20, 35, 40, 25, 10, 5] // Substitua pelos seus dados
        }],
        chart: {
            type: 'bar',
            height: 300,
            width: 500
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '90%',
                endingShape: 'flat'
            }
        },
        xaxis: {
            categories: ['GHL-05', 'BT2-093', 'BBL-05', 'GGHL', 'HGL-10', 'BBL09', 'GHL-11', 'BT3-000'],
            title: {
                text: 'Máquinas'
            }
        },
        yaxis: {
            title: {
                text: 'Ocorrências'
            }
        },
        title: {
            text: 'Histograma',
            align: 'center'
        },
        tooltip: {
            theme: 'dark',
        },
    };

    var chart = new ApexCharts(document.querySelector("#histogramChart"), options);
    chart.render();
});


// GRAFICO HISTOGRAMA










