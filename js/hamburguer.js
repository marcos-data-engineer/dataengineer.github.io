document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        mobileMenuIcon.setAttribute('aria-expanded', 
            mobileMenu.classList.contains('open') ? 'true' : 'false');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
        mobileMenuIcon.setAttribute('aria-expanded', 'false');
    };

    // Toggle menu on hamburger click
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', toggleMenu);
        mobileMenuIcon.setAttribute('role', 'button');
        mobileMenuIcon.setAttribute('aria-expanded', 'false');
        mobileMenuIcon.setAttribute('aria-label', 'Menu de navegação');
    }

    // Close menu on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close menu when link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });
});