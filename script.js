function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
     
}

function toggleNight() {
    const body = document.body;
    const nightModeButton = document.querySelector('.night-mode');
    const nightModeIcon = nightModeButton.querySelector('img');

    body.classList.toggle('night-mode');

    // Update button icon based on current mode
    if (body.classList.contains('night-mode')) {
        nightModeIcon.src = './assets/night-mode-btn.png'; // Icon for light mode
    } else {
        nightModeIcon.src = './assets/night-mode.png'; // Icon for dark mode
    }
}


 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
     
}

function toggleNight() {

    const night = document.body.classList.toggle('night-mode');
    night.classList("open")

    
}


 