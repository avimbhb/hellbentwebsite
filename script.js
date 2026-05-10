// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navList = document.getElementById('nav-list');

    // Toggle Mobile Navigation Menu
    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Change icon based on state
        if (navList.classList.contains('active')) {
            mobileToggle.classList.replace('fa-bars', 'fa-times');
        } else {
            mobileToggle.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close mobile menu when any nav link is clicked
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileToggle.classList.replace('fa-times', 'fa-bars');
        });
    });

    // Header transparency scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 1)';
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        }
    });
});