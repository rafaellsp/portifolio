const palavras = ["Analista.", "Desenvolvedor.", "Freelancer.", "Front-end.", "Programador."];
let index = 0;
const span = document.querySelector(".txt-animado span");

function digitar(texto, callback) {
    let i = 0;
    const interval = setInterval(() => {
        span.textContent = texto.slice(0, i);
        i++;
        if (i > texto.length) {
            clearInterval(interval);
            setTimeout(callback, 1000); // Pequena pausa antes de apagar
        }
    }, 100);
}

function apagar(callback) {
    let i = span.textContent.length;
    const interval = setInterval(() => {
        span.textContent = span.textContent.slice(0, i);
        i--;
        if (i < 0) {
            clearInterval(interval);
            setTimeout(callback, 500); // Pequena pausa antes de digitar
        }
    }, 50);
}

function trocarPalavra() {
    apagar(() => {
        index = (index + 1) % palavras.length;
        digitar(palavras[index], trocarPalavra);
    });
}

// Inicia a animação
digitar(palavras[index], trocarPalavra);
