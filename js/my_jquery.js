$(document).ready(function(){
    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'medium');
    });
    $('#mn1').click(function(){
        $('html, body').animate({
            scrollTop: $("#part1").offset().top
        }, 1000);
    })
    $('#mn2').click(function(){
        $('html, body').animate({
            scrollTop: $("#part2").offset().top
        }, 1000);
    })
    $('#mn3').click(function(){
        $('html, body').animate({
            scrollTop: $("#part3").offset().top
        }, 1000);
    })
    $('#mn4').click(function(){
        $('html, body').animate({
            scrollTop: $("#part4").offset().top
        }, 1000);
    })
    $('#mn5').click(function(){
        $('html, body').animate({
            scrollTop: $("#part5").offset().top
        }, 1000);
    })
    $('#arr').click(function(){
        $('html, body').animate({
            scrollTop: $("#part2").offset().top
        }, 2000);
    })
    function lower(){
        $('#arr').animate({top : "-=40"},1300,"swing",upper)
    }
    function upper(){
        $('#arr').animate({top : "+=40"},1300,"swing",lower)
    }
    upper();
});