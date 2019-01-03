// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    var siteNavbar = $('.site-navbar');

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = siteNavbar.height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && siteNavbar.hasClass('is-fixed')) {
                        siteNavbar.addClass('is-visible');
                    } else {
                        siteNavbar.removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    siteNavbar.removeClass('is-visible');
                    if (currentTop > headerHeight && !siteNavbar.hasClass('is-fixed')) siteNavbar.addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});