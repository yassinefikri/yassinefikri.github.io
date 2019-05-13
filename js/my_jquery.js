/*Author : Yassine Fikri*/

$(document).ready(function(){

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

    //Menu Animation Switch
    var ma=0;
    var lasthambclass="hamburger--slider";
    var nexthambclass="hamburger--elastic";
    function menuanimswitch(){
        switch(ma){
            case 0:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--spring";
                ma=ma+1;
                break;
            case 1:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--emphatic";
                ma=ma+1;
                break;
            case 2:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--spin";
                ma=ma+1;
                break;
            case 3:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--slider";
                ma=ma+1;
                break;
            case 4:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--elastic";
                ma=0;
                break;
            default:
                $("#hamb").removeClass(lasthambclass);
                $("#hamb").addClass(nexthambclass);
                lasthambclass=nexthambclass;
                nexthambclass="hamburger--slider";
                ma=0;
                break;
        }
    }

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("#menu").toggleClass("menu");
        $("#menu").toggleClass("mobmenuopened");
        $("#menu>ul>li").toggleClass("mobmenuopenedli");
        $("#menu>ul").toggleClass("mobmenuopenedlu");
        if(!$("#hamb").hasClass("is-active")){
            menuanimswitch();
        }
    })

    function menuclickclassremove(){
        if($("#menu").hasClass("mobmenuopened")){
            $("#menu").removeClass("mobmenuopened");
            $("#menu>ul>li").removeClass("mobmenuopenedli");
            $("#menu>ul").removeClass("mobmenuopenedlu");
            $("#menu").addClass("menu");
            $(".hamburger").toggleClass("is-active");
            menuanimswitch();
        }
    }

    //Bottom Pics
    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'medium');
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
    function lower(){
        $('.godicon').animate({top : "-=40"},2000,"swing",upper)
    }
    function upper(){
        $('.godicon').animate({top : "+=40"},2000,"swing",lower)
    }
    upper();

    //Part 3 eff
    $("#part3l1,#part3l2,#part3l3,#part3m1,#part3m2,#part3m3,#part3r1,#part3r2,#part3r3").mouseover(function(){
        $(this).children().addClass("part3eff");
    });
    $("#part3l1,#part3l2,#part3l3,#part3m1,#part3m2,#part3m3,#part3r1,#part3r2,#part3r3").mouseout(function(){
        $(this).children().removeClass("part3eff");
    });

    //Pics eff
    $("#dem,#pweb,#mcpc").mouseover(function(){
        $(this).animate({opacity : 0.7});
  
    });
    $("#dem,#pweb,#mcpc").mouseout(function(){
        $(this).animate({opacity : 1});
    });

    //Hide & Show Parts
    function myfunction(classnameid,fadetime){
    	var xt=$(classnameid).offset().top;
        var xb=xt+$(classnameid).height();
        var wt=$(window).scrollTop();
        var wb=wt+window.innerHeight;
        var opa=$(classnameid).css("opacity");

        if(xt>=wt && xb<=wb && opa==0){
            $(classnameid).fadeTo(fadetime,1);
        }
        if((xt>wb || wt>xb) && opa==1){
            $(classnameid).fadeTo(fadetime,0);
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
        myfunction('#demp',fadetime);
        myfunction('#pwebp',fadetime);
        myfunction('#mcpcp',fadetime);
    }
    function firsthide(){
        multicalls(0);
    }
    $(window).scroll(function(){
        multicalls(500);
    });
    firsthide();
    //End
});