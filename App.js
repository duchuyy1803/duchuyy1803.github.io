$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function () { 
        if (window.pageYOffset >= 200) {
            $('nav').addClass('thunho');
        } else {
            $('nav').removeClass('thunho');
        }
    });

    $('.home').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.homepage').offset().top }, 1000);
    });
    $('.services').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.khoi1').offset().top }, 1000);
    });
    $('.portfolio').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.khoi2').offset().top }, 1000);
    });
    $('.about').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.khoi3').offset().top }, 1000);
    });
    $('.contact').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.khoi6').offset().top }, 1000);
    });

    $(window).scroll(function() {
        if (window.pageYOffset >= 200) {
            $('.back-to-top').addClass('hienra');
        } else{
            $('.back-to-top').removeClass('hienra');
        }
    });

    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
    
    $(window).scroll(function () {
        if (window.pageYOffset >= $('.khoi6').offset().top - 72) {
            $('.nava').removeClass('active');
            $('.contact').addClass('active');
         } else if (window.pageYOffset >= $('.khoi3').offset().top - 72) {
            $('.nav').removeClass('active');
            $('.about').addClass('active');
        } else if (window.pageYOffset >= $('.khoi2').offset().top - 72) {
            $('.nava').removeClass('active');
            $('.portfolio').addClass('active');
        } else if (window.pageYOffset >= $('.homepage').offset().top - 72) {
            $('.nava').removeClass('active');
            $('.home').addClass('active');
        } else
            $('.nava').removeClass('active');
    });
}); 