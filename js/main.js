$(document).ready(function(){

    // Books Section
    $('#Books .owl-carousel').owlCarousel({
        margin:25,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // Slider section
    $('#slider .carousel').carousel({
        interval: 2000
      });
    // digital section
    $('#digital-learning .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
    // AOS Instanse
    AOS.init({
        delay: 0,
        duration: 1000,
    });
});