$(document).ready(function(){

    AOS.init();
    
    //Nav Background Color
    function navbackgfunction(){
        if($(window).scrollTop()==0){
            $('nav').removeClass("navbg");
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

    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });

})