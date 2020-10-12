$(document).ready(function(){

    AOS.init();
    
    //Nav Background Color
    function navbackgfunction(){
        if($(window).scrollTop()==0){
            if($('nav button').attr('aria-expanded')=="false") $('nav').removeClass("navbg");
        }
        else{
            $('nav').addClass("navbg");
        }
    }
    $(window).scroll(function(){
        navbackgfunction();
    });
    navbackgfunction();

    $('nav button').click(function(){
        if($(window).scrollTop()==0){
            if($(this).attr('aria-expanded')=="false") $('nav').addClass('navbg');
            else $('nav').removeClass('navbg');
        }
    })

    $('nav a[href*=\\#],#pweb').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('nav-link')) $(this).blur();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top-50
        }, 500);
    });

    $('a.card').hover(function(){
        $(this).stop(true,true).animate({top:'-8px'},300);
    },function(){
        $(this).stop(true,true).animate({top:'0px'},300);
    });

})