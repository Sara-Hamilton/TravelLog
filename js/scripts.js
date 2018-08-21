// scrolls to top of page on refresh
(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#TravelLog').offset().top
         }, 2000);
    });
})(jQuery);

// smooth scroll to nav bar links
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        let target = $(this.hash).parent();
        let navbar = document.getElementById("navBar");
        let navbarHeight = $(navbar).height();
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - (navbarHeight - 5)
            }, 2000);
            return false;
        }
    });
});
