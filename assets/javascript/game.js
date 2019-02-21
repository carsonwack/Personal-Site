$(document).ready(function () {


    $('#phone-menu').click(function () {
        $('#mobile').addClass('showing-sidebar');
        document.getElementById('mobile-navbar').style.display = 'block';
        document.getElementById('phone-menu').style.visibility = 'hidden';
    });

    if ($(window).width() < 768) {
        $('a.nav-link').click(function () {
            document.getElementById('mobile-navbar').style.display = 'none';
            document.getElementById('phone-menu').style.visibility = 'visible';
        });
    }


    // ___________________________Sidebar nav click functionality______________________________________


    var $sections = $('.scrollable');

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        var $currentSection;

        $sections.each(function () {

            var divPosition = $(this).offset().top;

            if (divPosition - 1 < currentScroll) {
                $currentSection = $(this);
            }

            var id = $currentSection.attr('id');
            $('a').removeClass('active');
            $("[href='#" + id + "']").addClass('active');

        })
    });

    // _________________________Scrolly effect on sidebar nav click________________________________________

    $("#page1-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#page1").offset().top
        }, 1100);
    });

    $("#page2-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#page2").offset().top
        }, 1100);
    });

    $("#page3-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#page3").offset().top
        }, 1100);
    });


});