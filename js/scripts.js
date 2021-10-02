(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    //Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#to-top2').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#to-top3').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#to-top4').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#to-top5').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

})(jQuery);