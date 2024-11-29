
function salvarExpediente() {
  window.location = "dash_Gerenciamento_Operacao.html"
  alert("FOI")
    contabilizaTarefas()
}

function loadTimerData() {
    const savedTime = localStorage.getItem('timerTime');

  
    // Inicializa o tempo salvo ou define os valores padrões
    if (savedTime) {
      const [savedHours, savedMinutes, savedSeconds] = savedTime.split(':').map(Number);
      hours = savedHours;
      minutes = savedMinutes;
      seconds = savedSeconds;
    } else {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  }
  
  
  // Função para contabilizar o tempo
  function updateCounter() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      minuteCounter++;
  
      // Atualiza o gráfico a cada minuto completo

      if (window.location.pathname.endsWith('dash_Gerenciamento_Operacao.html')) { 
        updateGraph();
    }
     
    }
  
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  
    // Atualiza a interface e salva o tempo no localStorage
    updateDisplay();
    localStorage.setItem('timerTime', `${hours}:${minutes}:${seconds}`);

    if (hours == 8 || minutes == 8 || seconds == 30 ) {
      salvarExpediente()
    }
  }
  
  // Função para atualizar o display do tempo
  function updateDisplay() {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("counter").textContent = formattedTime;
  }
  
  // Função principal para iniciar o temporizador e o gráfico
  function startTimer() {
    loadTimerData();  // Carrega o estado salvo do temporizador
    if (window.location.pathname.endsWith('dash_Gerenciamento_Operacao.html')) { 
        loadGraphData();  // Carrega o estado salvo do gráfico
    }
  
    if (!timerInterval) {
      timerInterval = setInterval(updateCounter, 1000); // Atualiza o contador a cada segundo
    }
  }
  
  // Inicia o temporizador ao carregar a página
  window.onload = startTimer;
  