/*---------------------------------
|  Personal Web Main Jquery File  |
|      author : Yassine Fikri     |
---------------------------------*/

$(document).ready(function(){

    // Description Divs Position
    function checkdesc(){
        if(window.innerWidth<=950){
            $("#demdesc").insertAfter($("#dempart"));
            $("#pwdesc").insertAfter($("#pwebpart"));
        }
        if(window.innerWidth>950){
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
        if(window.innerHeight<=950) $(".godicon").offset({top: window.innerHeight*0.86});
        else $(".godicon").offset({top: window.innerHeight*0.89});
        godiconrun();
        checkeffects();
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
        hideshowdesc("#mcpcvidcont","#pwdesc","#demdesc");
    });
    $("#pwebp").click(function(){
        hideshowdesc("#pwdesc","#mcpcvidcont","#demdesc");
    });
    $("#demp").click(function(){
        hideshowdesc("#demdesc","#mcpcvidcont","#pwdesc");
    });

    //Auto Hide & Show Parts (Part2 && Part4)
    function setopa(classnameid,fadetime,opa){
        $(classnameid).fadeTo(fadetime,opa);
    }
    // Progress Bars (Part3)
    function pbmove(progdiv,lim){
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width == lim) {
                clearInterval(id);
            }
            else {
                if(width< lim) width++; 
                else width--;
                $(progdiv).width(width + '%'); 
            }
        }
    }
    // To not Spam ProgressBarMoving
    var controlpb = new Array(9);
    for(var i=0;i<9;i++) controlpb[i]=0;

    //Divs Effects
    function myfunction1(classnameid,fadetime,maxopa,minopa){
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
    function myfunction2(classnameid,percent){
    	var xt=$("#pb"+classnameid).offset().top;
        var xb=xt+$("#pb"+classnameid).height();
        var wt=$(window).scrollTop();
        var wb=wt+window.innerHeight;
        var actp= $("#pb"+classnameid).width();
        if(xt>=wt && xb<=wb && actp!=percent && controlpb[classnameid]==0){
            pbmove("#pb"+classnameid,percent);
            controlpb[classnameid]=1;
        }
        if(xt>wb || wt>xb && actp!=10 && controlpb[classnameid]==1){
            pbmove("#pb"+classnameid,10);
            controlpb[classnameid]=0;
        }
    }
    var sklperc= new Array(9);
    sklperc[0]=80;
    sklperc[1]=86;
    sklperc[2]=75;
    sklperc[3]=72;
    sklperc[4]=80;
    sklperc[5]=75;
    sklperc[6]=85;
    sklperc[7]=75;
    sklperc[8]=85;
    for(var i=0;i<9;i++){
        $("#pb"+i).html(sklperc[i]+"%");
    }
    function multicalls(fadetime){
        myfunction1('#part2l',fadetime,1,0);
        myfunction1('#part2m',fadetime,1,0);
        myfunction1('#part2r',fadetime,1,0);
        for(var i=0;i<9;i++) myfunction2(i,sklperc[i]);
        myfunction1('#dem',fadetime,1,0.3);
        myfunction1('#pweb',fadetime,1,0.3);
        myfunction1('#mcpc',fadetime,1,0.3);
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