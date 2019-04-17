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


    // ___________________________Sidebar nav highlight functionality______________________________________

    let $sections = $('.scrollable');

    $(window).scroll(function () {
        let currentScroll = $(this).scrollTop();

        let $currentSection;

        $sections.each(function () {

            let divPosition = $(this).offset().top;

            if (divPosition - 1 < currentScroll) {
                $currentSection = $(this);
            }

            let id = $currentSection.attr('id');
            $('a').removeClass('active');
            $("[href='#" + id + "']").addClass('active');

        })
    });

    // _________________________Scrolly effect on sidebar nav click________________________________________

    $('#page1-button').click(function() {
        $('html, body').animate({
            // Sets ID to scroll to
            scrollTop: $('#first-scroll').offset().top
        }, 1100);
    });

    $('#page2-button').click(function() {
        $('html, body').animate({
            // Sets ID to scroll to
            scrollTop: $('#second-scroll').offset().top
        }, 1100);
    });

    $('#page3-button').click(function() {
        $('html, body').animate({
            // Sets ID to scroll to
            scrollTop: $('#third-scroll').offset().top
        }, 1100);
    });


});








