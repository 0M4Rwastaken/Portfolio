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


 