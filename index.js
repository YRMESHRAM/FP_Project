document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

        document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });

        navMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
