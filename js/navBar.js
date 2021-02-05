$(document).ready(function() {

    $("a").on('click', function(event) {
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#mainNav').fadeIn();
    } else {
        $('#mainNav').fadeOut();
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#homePage').fadeOut();
    } else {
        $('#homePage').fadeIn();
    }
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $("#about").addClass("active").animate();
        $("#work").addClass("active").animate();
        $("#home").removeClass("active").animate();

    } else {
        $("#about").removeClass("active").animate();
        $("#work").removeClass("active").animate();
        $("#home").addClass("active").animate();

    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
        $("#work").addClass("active").animate();
        $("#about").removeClass("active").animate();
    } else {
        $("#work").removeClass("active").animate();
    }
});