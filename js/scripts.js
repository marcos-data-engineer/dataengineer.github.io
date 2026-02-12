(function() {

    // Animate to section when nav is clicked
    const headerLinks = document.querySelectorAll('header a');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const allLinks = [...headerLinks, ...mobileMenuLinks];
    
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
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Focus on the target element for accessibility
                    targetElement.focus();
                    
                    // Hide the menu once clicked if mobile
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                    }
                }
            }
        });
    });
    
    // Scroll to top
    const scrollToTopButtons = document.querySelectorAll('#to-top1, #to-top2, #to-top3, #to-top4, #to-top5, #to-top6, #to-top7');
    
    scrollToTopButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            // Focus on header for accessibility
            const header = document.querySelector('header');
            if (header) {
                header.focus();
            }
        });
        
        // Make buttons keyboard accessible
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
    });

    // Enable keyboard navigation for scroll-to-top buttons
    scrollToTopButtons.forEach(function(button) {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

})();