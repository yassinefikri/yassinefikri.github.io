/*---------------------------------
|  Personal Web Main Jquery File  |
|      author : Yassine Fikri     |
---------------------------------*/

$(document).ready(function(){

	//Detect IE
	var isIE=false;
	isIE=detectIE();
	function detectIE() {
		var ua = window.navigator.userAgent;
    	var msie = ua.indexOf("MSIE ");
    	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
        	return true;
    	}
    	else{
        	return false;
    	}
    	return false;
	}
	if(isIE) $(".part4header2,.part4cont2").css("display","none");

    //Resizing Window
    $(window).resize(function(){
    	if(window.innerHeight<=1000) {
            if($('#menu').hasClass('mobmenuopened')){
                menuclickclassremove();
                $('#menu').addClass('menu');
            }
        }
        if(!isIE){
        	$(".godicon").stop();
        	if(window.innerHeight<=1000) {
            	$(".godicon").offset({top: window.innerHeight*0.86});
        	}
        	else {
            	$(".godicon").offset({top: window.innerHeight*0.89});
        	}
        	godiconrun();
        	checkeffects();
        }
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
    	$(this).finish();
        $(this).animate({top : "-=10"},200,"swing");
    })
    $('.elementofpartofpart2').mouseleave(function(){
    	$(this).finish();
        $(this).animate({top : "+=10"},200,"swing");
    })

    //Menu Click Moving
    $("#menu li").click(function(){
        menuclickclassremove();
        $('html, body').finish();
        $('html, body').animate({scrollTop: $("#part"+($(this).index()+1)).offset().top-50}, 1000);
    })

    //Part 1 Arrow
    function lower(dy,dur){
        $('.godicon').animate({top : "-="+dy},dur,"swing",function(){upper(dy,dur)});
    }
    function upper(dy,dur){
        $('.godicon').animate({top : "+="+dy},dur,"swing",function(){lower(dy,dur)});
    }
    function godiconrun(){
        upper(window.innerHeight/30,2000);
    }
    if (!isIE) {
    	$('.godicon').click(function(){
        	$('html, body').animate({
            	scrollTop: $("#part2").offset().top-50
        	}, 2000);
    	})
    	godiconrun();
    }
    else $('.godicon').css("display","none");

    //Last 2 Arrows
    $('#leftgoup,#rightgoup').mouseenter(function(){
        $(this).animate({top : "-=5"},500,"swing");
    })
    $('#leftgoup,#rightgoup').mouseleave(function(){
        $(this).animate({top : "+=5"},500,"swing");
    })
    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    //Description Divs show Hide
    if(!isIE){
    	$(".partofpart4").click(function(){
        	$('.overlay').eq($(this).index()).css('display','flex');
        	if($(this).attr('id')=="mcpcpart"){
            	$("#mcpcvid").attr('src','https://www.youtube.com/embed/UL7QOMiLzdU');
        	}
    	});
    }

    //Descriptions
    if(!isIE){
    	$(".overlay").click(function(){
        	$target = $(event.target);
        	if($target.hasClass("overlay")){
            	$(this).css("display","none");
            	$("#mcpcvid").attr('src','');
        	}
    	})
    	$("#menu").click(function(){
        	$(".overlay").css("display","none");
        	$("#mcpcvid").attr('src','');
    	})
    }

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
    }
    function firsthide(){
        multicalls(0);
    }
    function checkeffects(){
        multicalls(500);
    }
    if(!isIE){
    	$(window).scroll(function(){
        	checkeffects();
    	});
    	firsthide();
    	checkeffects();
    }
    //End
});