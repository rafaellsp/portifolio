 // Define as habilidades e seus níveis de domínio
 const skills = {
    htmlcss: 70,
    javascript: 80,
    python: 90

};

// Função para animar as barras de progresso
function animateProgressBars() {
    for (const skill in skills) {
        const bar = document.getElementById(skill);
        const level = skills[skill];
        bar.style.width = level + "%";
        bar.textContent = level + "%";
    }
}

// Anima as barras de progresso após o carregamento da página
window.onload = animateProgressBars;