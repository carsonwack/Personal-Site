$(document).ready(function () {

    $('#fallacy').click(function () {
        window.location = "https://carsonwack.github.io/TriviaGame/";
    });

    $('#stopwatch').click(function () {
        window.location = "https://carsonwack.github.io/stopwatch/";
    });

    $('#gifs').click(function () {
        window.location = "https://carsonwack.github.io/GiphyAPI--Comedians/";
    });

    $('#train').click(function () {
        window.location = "https://carsonwack.github.io/TrainTrack/";
    });

    $('#betkeep').click(function () {
        window.location = "https://carsonwack.github.io/BetKeeper/";
    });

    $('#ingredient-list').click(function () {
        window.location = "https://curtisyungen.github.io/project-one/";
    });

    $('#git-link').click(function () {
        window.location = "https://github.com/carsonwack";
    });

    $('#linked-link').click(function () {
        window.location = "https://www.linkedin.com/in/carson-wack-206/";
    });


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



    // _________________________________________________________________


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

    // _________________________________________________________________


});