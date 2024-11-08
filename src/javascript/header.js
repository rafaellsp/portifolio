document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active"); // Ativa o X
        menu.classList.toggle("show"); // Mostra o menu
    });
});
