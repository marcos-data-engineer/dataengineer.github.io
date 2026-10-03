document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    if (!mobileMenuIcon || !mobileMenu) {
        return;
    }

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        mobileMenuIcon.setAttribute('aria-expanded', String(mobileMenu.classList.contains('open')));
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
        mobileMenuIcon.setAttribute('aria-expanded', 'false');
    };

    mobileMenuIcon.addEventListener('click', toggleMenu);
    mobileMenuIcon.setAttribute('aria-expanded', 'false');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeMenu();
            mobileMenuIcon.focus();
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
            mobileMenuIcon.focus();
        }
    });
});