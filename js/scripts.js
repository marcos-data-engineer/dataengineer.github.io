(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        var heading = $(this).attr('href');

        // Check if the href is a valid CSS selector (starts with #)
        if (heading.startsWith('#')) {
            e.preventDefault(); // Prevent default behavior only for valid selectors

            var scrollDistance = $(heading).offset().top;

            $('html, body').animate({
                scrollTop: scrollDistance + 'px'
            }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

            // Hide the menu once clicked if mobile
            if ($('header').hasClass('active')) {
                $('header, body').removeClass('active');
            }
        }
        // If it's not a valid selector (e.g., a URL), allow the link to behave normally
    });

    // Scroll to top
    $('#to-top1, #to-top2, #to-top3, #to-top4, #to-top5, #to-top6, #to-top7').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

})(jQuery);