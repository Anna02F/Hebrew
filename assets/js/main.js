$(document).ready(function () {
    $(window).load(function () {
        $('#js-loader').fadeOut("slow");
    });

    $('.dropdown-hover').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn("fast");
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut("fast");
    });

    //Header animation

    var c, currentScrollTop = 0,
        navbar = $('header');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("nav-up");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("nav-up").addClass("nav-down");
        }else if(c > currentScrollTop){
            navbar.removeClass("nav-up").removeClass("nav-down");
        }
        c = currentScrollTop;
    });

    //ScrollTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.js-scroll-top-top').fadeIn();
        } else {
            $('.js-scroll-top-top').fadeOut();
        }
    });


    // scroll body to 0px on click
    $('.js-scroll-top-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Select2
    if ($('.js-select').length) {
        $('.js-select').select2({
            minimumResultsForSearch: -1
        });
    }
    if ($('#content-slider').length) {
        $('#content-slider').lightSlider({
            item:1,
            slideMargin:0,
            loop:true,
            auto:true,
            controls: false,
            pager:false,
            speed: 1500
        });
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
    $(".js-nav-xs-inner").html($("#nav-main").html());

    var path = document.querySelector('#path1');
    var l = path.getTotalLength();
    TweenMax.set(path, {strokeDasharray: l});

    var path2 = document.querySelector('#path2');
    var l2 = path2.getTotalLength();
    TweenMax.set(path2, {strokeDasharray: l2});

    var path3 = document.querySelector('#path3');
    var l3 = path3.getTotalLength();
    TweenMax.set(path3, {strokeDasharray: l3});

    var path4 = document.querySelector('#path4');
    var l4 = path4.getTotalLength();
    TweenMax.set(path4, {strokeDasharray: l4});

    var path5 = document.querySelector('#path5');
    var l5 = path5.getTotalLength();
    TweenMax.set(path5, {strokeDasharray: l5});

    var path6 = document.querySelector('#path6');
    var l6 = path6.getTotalLength();
    TweenMax.set(path6, {strokeDasharray: l6});

    var path7 = document.querySelector('#path7');
    var l7 = path7.getTotalLength();
    TweenMax.set(path7, {strokeDasharray: l7});

    var path8 = document.querySelector('#path8');
    var l8 = path8.getTotalLength();
    TweenMax.set(path8, {strokeDasharray: l8});

    var path9 = document.querySelector('#path9');
    var l9 = path9.getTotalLength();
    TweenMax.set(path9, {strokeDasharray: l9});

    var path10 = document.querySelector('#path10');
    var l10 = path10.getTotalLength();
    TweenMax.set(path10, {strokeDasharray: l10});

    var path11 = document.querySelector('#path11');
    var l11 = path11.getTotalLength();
    TweenMax.set(path11, {strokeDasharray: l11});

    var path12 = document.querySelector('#path12');
    var l12 = path12.getTotalLength();
    TweenMax.set(path12, {strokeDasharray: l12});

    var path13 = document.querySelector('#path13');
    var l13 = path13.getTotalLength();
    TweenMax.set(path13, {strokeDasharray: l13});

    var path14 = document.querySelector('#path14');
    var l14 = path14.getTotalLength();
    TweenMax.set(path14, {strokeDasharray: l14});

    var lines = new TimelineMax()
         .fromTo(path, 0.2, {strokeDashoffset: l, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path2, 0.2, {strokeDashoffset: -l2, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path3, 0.2, {strokeDashoffset: l3, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path4, 0.2, {strokeDashoffset: l4, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path5, 0.2, {strokeDashoffset: l5, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path6, 0.2, {strokeDashoffset: -l6, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path7, 0.2, {strokeDashoffset: -l7, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path8, 0.2, {strokeDashoffset: l8, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path9, 0.2, {strokeDashoffset: l9, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path10, 0.2, {strokeDashoffset: l10, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path11, 0.2, {strokeDashoffset: l11, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path12, 0.2, {strokeDashoffset: -l12, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path13, 0.2, {strokeDashoffset: -l13, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        })
        .fromTo(path14, 0.2, {strokeDashoffset: l14, ease: Power0.easeNone}, {
            strokeDashoffset: 0,
            ease: Power0.easeNone
        });

});
