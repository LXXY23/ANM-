// This file contains the JavaScript code for the classroom website. 
// It handles interactivity and dynamic content updates on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // Additional interactivity can be added here
});