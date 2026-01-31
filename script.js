window.addEventListener('scroll', function() {
    let navbar = document.getElementById("navbar");
    let startSection = document.getElementById("start");
    
    let startRect = startSection.getBoundingClientRect();

    if (startRect.bottom > 0) {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
    } else {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContainer = document.querySelector('.menu-container');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
});

window.addEventListener('load', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const contentWrapper = document.getElementById('content-wrapper');

    loaderWrapper.style.display = 'none';
    contentWrapper.style.display = 'block';
});