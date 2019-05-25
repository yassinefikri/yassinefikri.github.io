/*---------------------------------
|  Personal Web Main Jquery File  |
|      author : Yassine Fikri     |
---------------------------------*/

$(document).ready(function(){

    // Description Divs Position
    function checkdesc(){
        if(window.innerWidth<=1000){
            $("#demdesc").insertAfter($("#dempart"));
            $("#pwdesc").insertAfter($("#pwebpart"));
        }
        if(window.innerWidth>1000){
            $("#pwdesc").insertAfter($("#mcpcpart"));
            $("#demdesc").insertAfter($("#mcpcpart"));
        }
    }
    checkdesc();
    // Hide Description Divs
    $("#demdesc").fadeOut(0);
    $("#pwdesc").fadeOut(0);
    $("#mcpcvidcont").fadeOut(0);

    //Resizing Window
    $(window).resize(function(){
        $(".godicon").stop();
        $(".godicon").offset({top: window.innerHeight*0.86});
        godiconrun();
        checkhideshow();
        checkdesc();
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
        $("#menu>ul>li").toggleClass("mobmenuopenedli");
        $("#menu>ul").toggleClass("mobmenuopenedlu");
        if(!$("#hamb").hasClass("is-active")){
        }
    })

    //Menu Resest After Click on Menu Element
    function menuclickclassremove(){
        if($("#menu").hasClass("mobmenuopened")){
            $("#menu").removeClass("mobmenuopened");
            $("#menu>ul>li").removeClass("mobmenuopenedli");
            $("#menu>ul").removeClass("mobmenuopenedlu");
            $("#menu").addClass("menu");
            $("#hamb").toggleClass('open');
        }
    }

    //Bottom Pics
    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    //Menu Click Moving
    $('#mn1').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part1").offset().top-50
        }, 1000);
    })
    $('#mn2').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part2").offset().top-50
        }, 1000);
    })
    $('#mn3').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part3").offset().top-50
        }, 1000);
    })
    $('#mn4').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part4").offset().top-50
        }, 1000);
    })
    $('#mn5').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part5").offset().top-50
        }, 1000);
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
        if (window.innerWidth>800) upper(40,2000);
        else upper(60,2000);
    }
    godiconrun();

    //Part 2 Eff
    $(".elementofpartofpart2").mouseenter(function(){
        $(this).animate({ 'zoom': 1.3 }, 200);
    })
    $(".elementofpartofpart2").mouseleave(function(){
        $(this).animate({'zoom': 1 }, 200);
    })

    //Part 3 eff
    $("#part3l1,#part3l2,#part3l3,#part3m1,#part3m2,#part3m3,#part3r1,#part3r2,#part3r3").mouseover(function(){
        $(this).children().addClass("part3eff");
    });
    $("#part3l1,#part3l2,#part3l3,#part3m1,#part3m2,#part3m3,#part3r1,#part3r2,#part3r3").mouseout(function(){
        $(this).children().removeClass("part3eff");
    });

    //Pics eff
    $("#dem,#pweb,#mcpc").mouseenter(function(){
        $(this).animate({opacity : 0.3},200);
  
    });
    $("#dem,#pweb,#mcpc").mouseleave(function(){
        $(this).animate({opacity : 1},200);
    });

    //Enable / Disable show hide
    var enablepart4=1;

    //Description Divs show Hide

    function hideshowdesc(main,second1,second2){
        if($(main).css("display")=="none"){
            enablepart4=0;
            if($(second1).css("display")!="none") $(second1).fadeOut(100);
            if($(second2).css("display")!="none") $(second2).fadeOut(100);
            if(main=="#mcpcvidcont") $("#mcpcvid").attr('src','https://www.youtube.com/embed/UL7QOMiLzdU');
            $(main).fadeIn(1000)
        }
        else{
            enablepart4=1;
            $(main).fadeOut(1000);
            if(main=="#mcpcvidcont") $("#mcpcvid").attr('src','');
        }
        show("#demp,#pweb,#mcpcp",0);
    }
    $("#mcpcp").click(function(){
        hideshowdesc("#mcpcvidcont","#pwdesc","#demdesc");
    });
    $("#pwebp").click(function(){
        hideshowdesc("#pwdesc","#mcpcvidcont","#demdesc");
    });
    $("#demp").click(function(){
        hideshowdesc("#demdesc","#mcpcvidcont","#pwdesc");
    });

    //Auto Hide & Show Parts
    function show(classnameid,fadetime){
        $(classnameid).fadeTo(fadetime,1);
    }
    function hide(classnameid,fadetime){
        $(classnameid).fadeTo(fadetime,0);
    }

    function myfunction(classnameid,fadetime){
    	var xt=$(classnameid).offset().top;
        var xb=xt+$(classnameid).height();
        var wt=$(window).scrollTop();
        var wb=wt+window.innerHeight;
        var opa=$(classnameid).css("opacity");
        if(xt>=wt && xb<=wb && opa==0){
            show(classnameid,fadetime);
        }
        if((xt>wb || wt>xb) && opa==1){
            hide(classnameid,fadetime);
        }
    }
    function multicalls(fadetime){
        myfunction('#part2l',fadetime);
        myfunction('#part2m',fadetime);
        myfunction('#part2r',fadetime);
        myfunction('#part3l1',fadetime);
        myfunction('#part3m1',fadetime);
        myfunction('#part3r1',fadetime);
        myfunction('#part3l2',fadetime);
        myfunction('#part3m2',fadetime);
        myfunction('#part3r2',fadetime);
        myfunction('#part3l3',fadetime);
        myfunction('#part3m3',fadetime);
        myfunction('#part3r3',fadetime); 
        if(enablepart4==1){  
            myfunction('#demp',fadetime);
            myfunction('#pwebp',fadetime);
            myfunction('#mcpcp',fadetime);
        }
    }
    function firsthide(){
        multicalls(0);
    }
    $(window).scroll(function(){
        multicalls(500);
    });
    function checkhideshow(){
        multicalls(500);
    }
    setInterval(checkhideshow,500);
    firsthide();
    checkhideshow();
    //End
});