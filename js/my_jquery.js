/*---------------------------------
|  Personal Web Main Jquery File  |
|      author : Yassine Fikri     |
---------------------------------*/

$(document).ready(function(){

    // Description Divs Position
    function checkdesc(){
        if(window.innerWidth<=1000){
            $("#candesc").insertAfter($("#canpart"));
            $("#pwdesc").insertAfter($("#pwebpart"));
        }
        if(window.innerWidth>1000){
            $("#pwdesc").insertAfter($("#mcpcpart"));
            $("#candesc").insertAfter($("#mcpcpart"));
        }
    }
    checkdesc();
    // Hide Description Divs
    $("#candesc").fadeOut(0);
    $("#pwdesc").fadeOut(0);
    $("#mcpcvidcont").fadeOut(0);

    //Resizing Window
    $(window).resize(function(){
        $(".godicon").stop();
        if(window.innerHeight<=1000) {
            $(".godicon").offset({top: window.innerHeight*0.86});
            if($('#menu').hasClass('mobmenuopened')){
                menuclickclassremove();
                $('#menu').addClass('menu');
            }
        }
        else {
            $(".godicon").offset({top: window.innerHeight*0.89});
        }
        godiconrun();
        checkeffects();
        checkdesc();
        resize1();
        resize();
    })

    //Menu Background Color
    function menubackgfunction(){
        if($(window).scrollTop()==0){
            $('.menu,.mobmenu').removeClass("menubg");
        }
        else{
            $('.menu,.mobmenu').addClass("menubg");
        }
    }
    $(window).scroll(function(){
        menubackgfunction();
    });
    menubackgfunction();

    //Menu Click Classes Toggle
    $("#hamb").click(function(){
        $(this).toggleClass('open');
        $("#menu").toggleClass("menu");
        $("#menu").toggleClass("mobmenuopened");
    })

    //Menu Resest After Click on Menu Element
    function menuclickclassremove(){
        if($("#menu").hasClass("mobmenuopened")){
            $("#menu").removeClass("mobmenuopened");
            $("#menu").addClass("menu");
            $("#hamb").toggleClass('open');
        }
    }

    //Part 2 Divs Animation
    $('.elementofpartofpart2').mouseenter(function(){
        $(this).animate({top : "-=10"},200,"swing");
    })
    $('.elementofpartofpart2').mouseleave(function(){
        $(this).animate({top : "+=10"},200,"swing");
    })

    //Bottom Pics
    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    //Menu Click Moving
    $('#mn1').click(function(){
        menuclickclassremove();
        $('html, body').animate({scrollTop: $("#part1").offset().top-50}, 1000);
    })
    $('#mn2').click(function(){
        menuclickclassremove();
        $('html, body').animate({scrollTop: $("#part2").offset().top-50}, 1000);
    })
    $('#mn3').click(function(){
        menuclickclassremove();
        $('html, body').animate({scrollTop: $("#part3").offset().top-50}, 1000);
    })
    $('#mn4').click(function(){
        menuclickclassremove();
        $('html, body').animate({scrollTop: $("#part4").offset().top-50}, 1000);
    })
    $('#mn5').click(function(){
        menuclickclassremove();
        $('html, body').animate({scrollTop: $("#part5").offset().top-50}, 1000);
    })

    //Part 1 Arrow
    $('.godicon').click(function(){
        $('html, body').animate({
            scrollTop: $("#part2").offset().top-50
        }, 2000);
    })
    function lower(dy,dur){
        $('.godicon').animate({top : "-="+dy},dur,"swing",function(){upper(dy,dur)});
    }
    function upper(dy,dur){
        $('.godicon').animate({top : "+="+dy},dur,"swing",function(){lower(dy,dur)});
    }
    function godiconrun(){
        upper(window.innerHeight/30,2000);
    }
    godiconrun();

    //Last 2 Arrows
    $('#leftgoup,#rightgoup').mouseenter(function(){
        $(this).animate({top : "-=5"},500,"swing");
    })
    $('#leftgoup,#rightgoup').mouseleave(function(){
        $(this).animate({top : "+=5"},500,"swing");
    })

    //Description Divs show Hide
    function hideshowdesc(main,second1,second2){
        if($(main).css("display")=="none"){
            if($(second1).css("display")!="none") $(second1).fadeOut(400);
            if($(second2).css("display")!="none") $(second2).fadeOut(400);
            if(main=="#mcpcvidcont") $("#mcpcvid").attr('src','https://www.youtube.com/embed/UL7QOMiLzdU');
            if(main!="#mcpcvidcont") $("#mcpcvid").attr('src','');
            $(main).fadeIn(1200);
            if(window.innerWidth>1000) $('html, body').animate({scrollTop: $("#part4").offset().top+$(".partofpart4").height()}, 1000);
            else $('html, body').animate({scrollTop: $(main).offset().top-$(main).height()*2/3}, 1000);
        }
        else{
            $(main).fadeOut(1000);
            if(main=="#mcpcvidcont") $("#mcpcvid").attr('src','');
            if(window.innerWidth>1000) $('html, body').animate({scrollTop: $("#part4").offset().top-100}, 1000);
            else $('html, body').animate({scrollTop: $(main).prev().offset().top-200}, 1000);
        }
    }
    $("#mcpcp").click(function(){
        hideshowdesc("#mcpcvidcont","#pwdesc","#candesc");
    });
    $("#pwebp").click(function(){
        hideshowdesc("#pwdesc","#mcpcvidcont","#candesc");
    });
    $("#canp").click(function(){
        hideshowdesc("#candesc","#mcpcvidcont","#pwdesc");
    });

    //Auto Hide & Show Parts (Part2 && Part4)
    function setopa(classnameid,fadetime,opa){
        $(classnameid).fadeTo(fadetime,opa);
    }
    //Divs Effects
    function myfunction(classnameid,fadetime,maxopa,minopa){
    	var xt=$(classnameid).offset().top;
        var xb=xt+$(classnameid).height();
        var wt=$(window).scrollTop();
        var wb=wt+window.innerHeight;
        var opa=$(classnameid).css("opacity");
        if(xt>=wt && xb<=wb && opa==minopa){
            setopa(classnameid,fadetime,maxopa);
        }
        if((xt>wb || wt>xb) && opa==maxopa){
            setopa(classnameid,fadetime,minopa);
        }
    }
    function multicalls(fadetime){
        myfunction('#part2l',fadetime,1,0);
        myfunction('#part2m',fadetime,1,0);
        myfunction('#part2r',fadetime,1,0);
        myfunction('#part3l1',fadetime,1,0);
        myfunction('#part3m1',fadetime,1,0);
        myfunction('#part3r1',fadetime,1,0);
        myfunction('#part3l2',fadetime,1,0);
        myfunction('#part3m2',fadetime,1,0);
        myfunction('#part3r2',fadetime,1,0);
        myfunction('#part3l3',fadetime,1,0);
        myfunction('#part3m3',fadetime,1,0);
        myfunction('#part3r3',fadetime,1,0); 
        /*myfunction('#dem',fadetime,1,0.3);
        myfunction('#pweb',fadetime,1,0.3);
        myfunction('#mcpc',fadetime,1,0.3);*/
    }
    function firsthide(){
        multicalls(0);
    }
    $(window).scroll(function(){
        multicalls(500);
    });
    function checkeffects(){
        multicalls(500);
    }
    firsthide();
    checkeffects();
    //End
});