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

// if ($(window).width() < 767) {

//     $('#mainNav').show();

// } else {
//     $('#mainNav').show();
// };

if ($(window).width() > 1280) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#mainNav').fadeIn();
        } else {
            $('#mainNav').fadeOut();
        }
    });
} else {
    // change functionality for larger screens
}



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

$(window).scroll(function() {
    if ($(this).scrollTop() > 2200) {
        $("#contact").addClass("active").animate();
        $("#work").removeClass("active").animate();
    } else {
        $("#contact").removeClass("active").animate();
    }
});




function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}