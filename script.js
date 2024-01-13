function openNav() {
    let nav = document.getElementById('nav');
    nav.style.left = "0px"
}

function closeNav() {
    let nav = document.getElementById('nav');
    nav.style.left = "-100%"
}

function load() {
    let navIcon = document.getElementById('nav-icon');
    navIcon.addEventListener("click", openNav); 
    
    let closeIcon = document.getElementById('nav-close-icon');
    closeIcon.addEventListener("click", closeNav); 
    
}

document.addEventListener("DOMContentLoaded", load)