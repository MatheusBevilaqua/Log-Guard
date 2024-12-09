let seconds = 0, minutes = 0, hours = 0;
let timerInterval;

// Função para carregar o tempo salvo ou iniciar zerado
function loadTime() {
    const savedTime = localStorage.getItem('timerTime');
    if (savedTime) {
        const [savedHours, savedMinutes, savedSeconds] = savedTime.split(':').map(Number);
        hours = savedHours || 0;
        minutes = savedMinutes || 0;
        seconds = savedSeconds || 0;
    }
    updateDisplay(); // Atualiza o display imediatamente
}

// Função para atualizar o display do contador
function updateDisplay() {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const counterElement = document.getElementById("counter");
    if (counterElement) {
        counterElement.textContent = formattedTime;
    }
}

// Função para iniciar o temporizador
function startTimer() {
    loadTime();
    if (!timerInterval) {
        timerInterval = setInterval(updateCounter, 1000);
    }
}

// Função para atualizar o contador a cada segundo
function updateCounter() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
    // Salva o tempo atualizado no localStorage
    localStorage.setItem('timerTime', `${hours}:${minutes}:${seconds}`);
}

// Limpa o temporizador (opcional)
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    localStorage.removeItem('timerTime');
    updateDisplay();
}

// Inicia o temporizador automaticamente ao carregar a página
window.onload = startTimer;
