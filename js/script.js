$(function() {
    
    $(window).on('scroll',function(){
        if($(window).scrollTop()) {
            $("nav").addClass("bgChange");
            $(".jumpToTop").fadeIn(500);
        }
        else {
            $("nav").removeClass("bgChange");
            $(".jumpToTop").fadeOut(500);
        }
    })

    $(".searchButton").click(function(){
        $(".searchWin").fadeIn(500);
    });

    $(".searchButtonMob").click(function(){
        $(".searchWin").fadeIn(500);
    });

    $(".closeButton").click(function(){
        $(".searchWin").fadeOut(500);
        $(".fullScreenImg").fadeOut(500);
    });

    $("body").scrollspy({
        target : "#customNav",
        offset : 300,
    });

    
    
    // **************************************************************************************************************************************
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay : true,
        autoplayTimeout : 3000,
        responsive:{
            0:{
                items:1,
                margin: 20,
            },
            768:{
                items:2,
                margin: 50,
            },
            1100:{
                items:3,
                margin: 50,
            },
        }
    })


    // **************************************************************************************************************************************
    // Gallery Full Screen Image View

    // Image 1
    $(".image1").click(function(){
        $(".fullScreenImg1").fadeIn(500);
    });

    // Image 2
    $(".image2").click(function(){
        $(".fullScreenImg2").fadeIn(500);
    });

    // Image 3
    $(".image3").click(function(){
        $(".fullScreenImg3").fadeIn(500);
    });

    // Image 4
    $(".image4").click(function(){
        $(".fullScreenImg4").fadeIn(500);
    });

    // Image 5
    $(".image5").click(function(){
        $(".fullScreenImg5").fadeIn(500);
    });

    // Image 6
    $(".image6").click(function(){
        $(".fullScreenImg6").fadeIn(500);
    });

    

    // **************************************************************************************************************************************
});