document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Verificamos que existan antes de agregar el evento
    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    } else {
        console.error("No se encontró el botón o el menú. Revisá las clases en el HTML.");
    }
});