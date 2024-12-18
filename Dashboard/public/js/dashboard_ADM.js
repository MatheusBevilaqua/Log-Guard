

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
    document.querySelector('.sessao-adm-modal-alertas').style.display = "none";
}

//a

//b

function cpu_adm_sessao3() {
    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('color', 'BLACK');

    document.querySelector('.sessao-adm-chartcpu-dado').style.setProperty('display', 'block');
    document.querySelector('.sessao-adm-chartram-dado').style.setProperty('display', 'none');
    document.querySelector('.sessao-adm-chartrede-dado').style.setProperty('display', 'none');
}

function ram_adm_sessao3() {
    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('color', 'BLACK');

    document.querySelector('.sessao-adm-chartcpu-dado').style.setProperty('display', 'none');
    document.querySelector('.sessao-adm-chartram-dado').style.setProperty('display', 'block');
    document.querySelector('.sessao-adm-chartrede-dado').style.setProperty('display', 'none');
}

function rede_adm_sessao3() {
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-rede-sessao3').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-ram-sessao3').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao3').style.setProperty('color', 'BLACK');

    document.querySelector('.sessao-adm-chartcpu-dado').style.setProperty('display', 'none');
    document.querySelector('.sessao-adm-chartram-dado').style.setProperty('display', 'none');
    document.querySelector('.sessao-adm-chartrede-dado').style.setProperty('display', 'block');
}


//b


//c

function cpu_adm_probabilidade() {
    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('color', 'BLACK');

    document.querySelector('.probabilityChartCPU').style.display = "block";
    document.querySelector('.probabilityChartRAM').style.display = "none";
    document.querySelector('.probabilityChartDISCO').style.display = "none";
}

function ram_adm_probabilidade() {
    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('color', 'BLACK');

    document.querySelector('.probabilityChartCPU').style.display = "none";
    document.querySelector('.probabilityChartRAM').style.display = "block";
    document.querySelector('.probabilityChartDISCO').style.display = "none";
}

function disco_adm_probabilidade() {
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('background-color', '#442BB3');
    document.querySelector('.sessao-adm-pointer-disco-sessao2').style.setProperty('color', 'WHITE');

    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-ram-sessao2').style.setProperty('color', 'BLACK');
    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('background-color', '#d3d3d3');
    document.querySelector('.sessao-adm-pointer-cpu-sessao2').style.setProperty('color', 'BLACK');

    document.querySelector('.probabilityChartCPU').style.display = "none";
    document.querySelector('.probabilityChartRAM').style.display = "none";
    document.querySelector('.probabilityChartDISCO').style.display = "block";
}

//c

// alerta semana

function getAlertaSemana() {
    const idEmpresaUsuario = sessionStorage.EMPRESA_USUARIO;
    console.log("idEmpresaUsuario na função getAlertaSemana:", idEmpresaUsuario);

    fetch(`adm/getAlertaSemana`, {
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
    fetch('adm/getParametrosRiscoRAM', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(parametros => {
            console.log('Parâmetros recebidos do servidor:', parametros);

            fetch('adm/getMaquinasDataRAM', {
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

                    function getRanges(parametro) {
                        return [
                            { from: 0, to: parametro * 0.5, name: 'Baixo', color: '#a69cd6' },
                            { from: parametro * 0.5, to: parametro * 0.75, name: 'Médio', color: '#7265b3' },
                            { from: parametro * 0.75, to: parametro + 10, name: 'Alto', color: '#442BB3' },
                            { from: parametro + 10, to: 100, name: 'Muito Alto', color: '#2b1f64' }
                        ];
                    }

                    var parametroRAM = parametros.ram;
                    var rangesRAM = getRanges(parametroRAM);

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
                                    ranges: rangesRAM
                                }
                            }
                        },
                        xaxis: {
                            type: 'category',
                        },
                        tooltip: {
                            theme: 'dark',
                            y: {
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
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
        })
        .catch(error => {
            console.error('Erro ao carregar os parâmetros de risco:', error);
        });
});


//ram




document.addEventListener('DOMContentLoaded', function () {
    fetch('adm/getParametrosRiscoCPU', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(parametros => {
            console.log('Parâmetros recebidos do servidor:', parametros);

            fetch('adm/getMaquinasDataCPU', {
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

                    function getRanges(parametro) {
                        return [
                            { from: 0, to: parametro * 0.5, name: 'Baixo', color: '#a69cd6' },
                            { from: parametro * 0.5, to: parametro * 0.75, name: 'Médio', color: '#7265b3' },
                            { from: parametro * 0.75, to: parametro + 10, name: 'Alto', color: '#442BB3' },
                            { from: parametro + 10, to: 100, name: 'Muito Alto', color: '#2b1f64' }
                        ];
                    }

                    var parametroCPU = parametros.cpu;
                    var rangesCPU = getRanges(parametroCPU);

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
                                    ranges: rangesCPU
                                },
                                dataLabels: {
                                    enabled: true,
                                    formatter: function (val) {
                                        return val + '%';
                                    },
                                    style: {
                                        colors: ['#fff']
                                    }
                                }
                            }
                        },
                        xaxis: {
                            type: 'category',
                        },
                        yaxis: {
                            labels: {
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
                        },
                        tooltip: {
                            theme: 'dark',
                            y: {
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
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
        })
        .catch(error => {
            console.error('Erro ao carregar os parâmetros de risco:', error);
        });
});



//cpu




//rede
document.addEventListener('DOMContentLoaded', function () {
    fetch('adm/getParametrosRiscoREDE', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(parametros => {
            console.log('Parâmetros recebidos do servidor:', parametros);

            fetch('adm/getMaquinasDataREDE', {
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

                    function getRanges(parametro) {
                        return [
                            { from: 0, to: parametro * 0.5, name: 'Baixo', color: '#a69cd6' },
                            { from: parametro * 0.5, to: parametro * 0.75, name: 'Médio', color: '#7265b3' },
                            { from: parametro * 0.75, to: parametro + 10, name: 'Alto', color: '#442BB3' },
                            { from: parametro + 10, to: 100, name: 'Muito Alto', color: '#2b1f64' }
                        ];
                    }

                    var parametroREDE = parametros.rede;
                    var rangesREDE = getRanges(parametroREDE);

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
                                    ranges: rangesREDE
                                },
                                dataLabels: {
                                    enabled: true,
                                    formatter: function (val) {
                                        return val + '%';
                                    },
                                    style: {
                                        colors: ['#fff']
                                    }
                                }
                            }
                        },
                        xaxis: {
                            type: 'category',
                        },
                        yaxis: {
                            labels: {
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
                        },
                        tooltip: {
                            theme: 'dark',
                            y: {
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
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
        })
        .catch(error => {
            console.error('Erro ao carregar os parâmetros de risco:', error);
        });
});


//rede




// GRAFICO PROBABILIDADE CPU
document.addEventListener('DOMContentLoaded', function () {
    fetch('adm/getProbabilidadeCPU', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var options = {
                chart: {
                    height: 200,
                    width: 675,
                    type: 'line'
                },
                series: [{
                    color: '#442BB3',
                    name: 'Probabilidade',
                    data: data.map(item => item.probabilidade)
                }],
                xaxis: {
                    categories: data.map(item => item.data)
                },
                tooltip: {
                    theme: 'dark'
                }
            };

            var chart = new ApexCharts(document.querySelector("#probabilityChart"), options);
            chart.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});

// GRAFICO PROBABILIDADE CPU


// GRAFICO PROBABILIDADE RAM
document.addEventListener('DOMContentLoaded', function () {
    fetch('adm/getProbabilidadeRAM', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var options = {
                chart: {
                    height: 200,
                    width: 675,
                    type: 'line'
                },
                series: [{
                    color: '#442BB3',
                    name: 'Probabilidade',
                    data: data.map(item => item.probabilidade)
                }],
                xaxis: {
                    categories: data.map(item => item.data)
                },
                tooltip: {
                    theme: 'dark'
                }
            };

            var chart = new ApexCharts(document.querySelector("#probabilityChartR"), options);
            chart.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
// GRAFICO PROBABILIDADE RAM

// GRAFICO PROBABILIDADE DISCO
document.addEventListener('DOMContentLoaded', function () {
    fetch('adm/getProbabilidadeDISCO', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log('Dados recebidos do servidor:', data);

            var options = {
                chart: {
                    height: 200,
                    width: 675,
                    type: 'line'
                },
                series: [{
                    color: '#442BB3',
                    name: 'Probabilidade',
                    data: data.map(item => item.probabilidade)
                }],
                xaxis: {
                    categories: data.map(item => item.data)
                },
                tooltip: {
                    theme: 'dark'
                }
            };

            var chart = new ApexCharts(document.querySelector("#probabilityChartD"), options);
            chart.render();
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
// GRAFICO PROBABILIDADE DISCO


// GRAFICO HISTOGRAMA

document.addEventListener('DOMContentLoaded', function () {
    fetch(`adm/getRiscoSemanal/${idEmpresaUsuario}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            var options = {
                series: [{
                    name: 'Ocorrências',
                    data: data.dados
                }],
                chart: {
                    type: 'bar',
                    height: 310,
                    width: 620
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: '90%',
                        endingShape: 'flat'
                    }
                },
                xaxis: {
                    categories: data.categorias,
                    title: {
                        text: 'Máquinas'
                    },
                    labels: {
                        rotate: -45,
                        style: {
                            fontSize: '10px'
                        }
                    }
                },
                title: {
                    text: 'Histograma de ocorrências em relação as máquinas',
                    align: 'center'
                },
                tooltip: {
                    theme: 'dark'
                }
            };

            var chart = new ApexCharts(document.querySelector("#histogramChart"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});


// GRAFICO HISTOGRAMA



// COMPOSIÇÃO DIAS DO ALERTA

document.addEventListener('DOMContentLoaded', function () {
    function atualizarAlertasSemanais() {
        var diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

        var hoje = new Date();
        var ontem = new Date(hoje);
        ontem.setDate(hoje.getDate() - 1);
        var antesDeOntem = new Date(hoje);
        antesDeOntem.setDate(hoje.getDate() - 2);

        var diaHoje = 'HOJE';
        var diaOntem = diasDaSemana[ontem.getDay()];
        var diaAntesDeOntem = diasDaSemana[antesDeOntem.getDay()];

        document.getElementById('sessao-2dias-antes').childNodes[0].nodeValue = `${diaAntesDeOntem} : `;
        document.getElementById('sessao-1dias-antes').childNodes[0].nodeValue = `${diaOntem} : `;
        document.getElementById('sessao-hoje').childNodes[0].nodeValue = `${diaHoje} : `;

        fetch('/adm/getAlertasPorDia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idEmpresaUsuarioServer: 3 })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos:', data);
                var alertasHoje = 0;
                var alertasOntem = 0;
                var alertasAntesDeOntem = 0;

                if (Array.isArray(data)) {
                    data.forEach(alerta => {
                        const dataAlerta = new Date(alerta.Data);
                        if (dataAlerta.toDateString() === hoje.toDateString()) {
                            alertasHoje = alerta.Quantidade;
                        } else if (dataAlerta.toDateString() === ontem.toDateString()) {
                            alertasOntem = alerta.Quantidade;
                        } else if (dataAlerta.toDateString() === antesDeOntem.toDateString()) {
                            alertasAntesDeOntem = alerta.Quantidade;
                        }
                    });
                }

                document.getElementById('alerts-today').textContent = alertasHoje;
                document.getElementById('alerts-yesterday').textContent = alertasOntem;
                document.getElementById('alerts-before-yesterday').textContent = alertasAntesDeOntem;
            })
            .catch(error => {
                console.error('Erro ao buscar dados de alertas:', error);
            });
    }

    atualizarAlertasSemanais();
});






// COMPOSIÇÃO DIAS DO ALERTA







