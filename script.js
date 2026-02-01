window.addEventListener('scroll', function() {
    const navbar = document.getElementById("navbar");
    const menuContainer = document.querySelector('.menu-container');

    // Detectamos si el usuario ha bajado más de 80px
    if (window.scrollY > 80) {
        // Solo ocultamos si el menú móvil está cerrado
        if (!menuContainer.classList.contains('active')) {
            navbar.style.opacity = "0";
            navbar.style.pointerEvents = "none";
        }
    } else {
        // En la parte superior siempre se ve
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContainer = document.querySelector('.menu-container');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
    
    // Al hacer clic, si abrimos el menú, nos aseguramos que el navbar se vea
    let navbar = document.getElementById("navbar");
    if (menuContainer.classList.contains('active')) {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
    }
});

window.addEventListener('load', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const contentWrapper = document.getElementById('content-wrapper');

    loaderWrapper.style.display = 'none';
    contentWrapper.style.display = 'block';
});