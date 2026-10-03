(function() {

    const headerLinks = document.querySelectorAll('header a');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const allLinks = [...headerLinks, ...mobileMenuLinks];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    allLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            
            // Treat as normal link if no-scroll class
            if (this.classList.contains('no-scroll')) return;
            
            const heading = this.getAttribute('href');
            
            // Check if the href is a valid CSS selector (starts with #)
            if (heading && heading.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(heading);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: reducedMotion ? 'auto' : 'smooth',
                        block: 'start'
                    });
                    
                    // Focus on the target element for accessibility
                    targetElement.focus();
                    
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
                        if (mobileMenuIcon) {
                            mobileMenuIcon.setAttribute('aria-expanded', 'false');
                        }
                    }
                }
            }
        });
    });
    
    const scrollToTopButtons = document.querySelectorAll('[id^="to-top"]');
    
    scrollToTopButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: reducedMotion ? 'auto' : 'smooth'
            });
            const header = document.querySelector('header');
            if (header) {
                header.focus();
            }
        });
    });

})();