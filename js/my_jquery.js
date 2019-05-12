/*Author : Yassine Fikri*/

$(document).ready(function(){

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("#menu").toggleClass("menu");
        $("#menu").toggleClass("mobmenuopened");
        $("#menu>ul>li").toggleClass("mobmenuopenedli");
        $("#menu>ul").toggleClass("mobmenuopenedlu");
    })

    function menuclickclassremove(){
        if($("#menu").hasClass("mobmenuopened")){
            $("#menu").removeClass("mobmenuopened");
            $("#menu>ul>li").removeClass("mobmenuopenedli");
            $("#menu>ul").removeClass("mobmenuopenedlu");
            $("#menu").addClass("menu");
            $(".hamburger").toggleClass("is-active");
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

    //Pics eff
    $("#dem,#pweb,#mcpc").mouseover(function(){
        $(this).animate({opacity : 0.7});
  
    });
    $("#dem,#pweb,#mcpc").mouseout(function(){
        $(this).animate({opacity : 1});
    });

    //Hide & Show Parts
    //a vars to avoid hide when already hidden /show when already shown
    var a11=0;
    var a12=0;
    var a13=0;
    var a21=0;
    var a22=0;
    var a23=0;
    var a31=0;
    var a32=0;
    var a33=0;
    var lastscroll11 = $(window).scrollTop();
    var lastscroll12 = $(window).scrollTop();
    var lastscroll13 = $(window).scrollTop();
    var lastscroll21 = $(window).scrollTop();
    var lastscroll22 = $(window).scrollTop();
    var lastscroll23 = $(window).scrollTop();
    var lastscroll31 = $(window).scrollTop();
    var lastscroll32 = $(window).scrollTop();
    var lastscroll33 = $(window).scrollTop();

    function myfunction(classnbr){
    	var xt=0;
        var xb=0;
        var wt=$(window).scrollTop();
        var wb=wt+window.innerHeight;

            switch(classnbr){
                case 21:
                    xt= $('#part2l').offset().top;
                    xb=xt+$('#part2l').height();
                    break;
                case 22:
                    xt= $('#part2m').offset().top;
                    xb=xt+$('#part2m').height();
                    break;
                case 23:
                    xt= $('#part2r').offset().top;
                    xb=xt+$('#part2r').height();
                    break;
                case 31:
                    xt= $('#part3l1').offset().top;
                    xb=xt+$('#part3l1').height();
                    break;
                case 32: 
                    xt= $('#part3l2').offset().top;
                    xb=xt+$('#part3l2').height();
                    break;
                case 33:
                    xt= $('#part3l3').offset().top;
                    xb=xt+$('#part3l3').height();
                    break;
                case 41:
                    xt= $('#demp').offset().top;
                    xb=xt+$('#demp').height();
                    break;
                case 42:
                    xt= $('#pwebp').offset().top;
                    xb=xt+$('#pwebp').height();
                    break;
                case 43:
                    xt= $('#mcpcp').offset().top;
                    xb=xt+$('#mcpcp').height();
                    break;
            }

        switch(classnbr) {
            case 21:
                if(wb>xt && xt>wt && xb>wb){
                    if(wt>lastscroll11 && a11==0){
                    	$('#part2l').animate({opacity : 1});
                    	a11=1;
                    }
                    if(wt<lastscroll11 && a11==1){
                    	$('#part2l').animate({opacity : 0});
                    	a11=0;
                    }
                }
                if(wt<xb && wb>xb && xt<wt){
                	if(wt>lastscroll11 && a11==1){
                    	$('#part2l').animate({opacity : 0});
                    	a11=0;
                    }
                    if(wt<lastscroll11 && a11==0){
                    	$('#part2l').animate({opacity : 1});
                    	a11=1;
                    }
                }
                lastscroll11=wt;
                break;
            case 22:
                if(wb>xt && xt>wt && xb>wb){
                    if(wt>lastscroll12 && a12==0){
                    	$('#part2m').animate({opacity : 1});
                    	a12=1;
                    }
                    if(wt<lastscroll12 && a12==1){
                    	$('#part2m').animate({opacity : 0});
                    	a12=0;
                    }
                }
                if(wt<xb && wb>xb && xt<wt){
                	if(wt>lastscroll12 && a12==1){
                    	$('#part2m').animate({opacity : 0});
                    	a12=0;
                    }
                    if(wt<lastscroll12 && a12==0){
                    	$('#part2m').animate({opacity : 1});
                    	a12=1;
                    }
                }
                lastscroll12=wt;
                break;
            case 23:
                if(wb>xt && xt>wt && xb>wb){
                    if(wt>lastscroll13 && a13==0){
                    	$('#part2r').animate({opacity : 1});
                    	a13=1;
                    }
                    if(wt<lastscroll13 && a13==1){
                    	$('#part2r').animate({opacity : 0});
                    	a13=0;
                    }
                }
                if(wt<xb && wb>xb && xt<wt){
                	if(wt>lastscroll13 && a13==1){
                    	$('#part2r').animate({opacity : 0});
                    	a13=0;
                    }
                    if(wt<lastscroll13 && a13==0){
                    	$('#part2r').animate({opacity : 1});
                    	a13=1;
                    }
                }
                lastscroll13=wt;
                break;
            case 31:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll21 && a21==0){
                    	$('#part3l1,#part3m1,#part3r1').animate({opacity : 1});
                    	a21=1;
                    }
                    if(wt<lastscroll21 && a21==1){
                    	$('#part3l1,#part3m1,#part3r1').animate({opacity : 0});
                    	a21=0;
                    }
                }
                if(wt<xb &&  wb>xb && xt<wt){
                	if(wt>lastscroll21 && a21==1){
                		$('#part3l1,#part3m1,#part3r1').animate({opacity : 0});
                    	a21=0;
                	}
                	if(wt<lastscroll21 && a21==0){
                		$('#part3l1,#part3m1,#part3r1').animate({opacity : 1});
                    	a21=1;
                	}
                }
                lastscroll21=wt;
                break;
            case 32:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll22 && a22==0){
                		$('#part3l2,#part3m2,#part3r2').animate({opacity : 1});
                    	a22=1;
                	}
                	if(wt<lastscroll22 && a22==1){
                		$('#part3l2,#part3m2,#part3r2').animate({opacity : 0});
                    	a22=0;
                	}
                }
                if(wt<xb && wb>xb && xt<wt){
                	if(wt>lastscroll22 && a22==1){
                		$('#part3l2,#part3m2,#part3r2').animate({opacity : 0});
                    	a22=0;
                	}
                	if(wt<lastscroll22 && a22==0){
                		$('#part3l2,#part3m2,#part3r2').animate({opacity : 1});
                    	a22=1;
                	}
                }
                lastscroll22=wt;
                break;
            case 33:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll23 && a23==0){
                		$('#part3l3,#part3m3,#part3r3').animate({opacity : 1});
                    	a23=1;
                	}
                	if(wt<lastscroll23 && a23==1){
                		$('#part3l3,#part3m3,#part3r3').animate({opacity : 0});
                    	a23=0;
                	}
                }
                if(wt<xb && wb>xb && xt<wt){
                	if(wt>lastscroll23 && a23==1){
                		$('#part3l3,#part3m3,#part3r3').animate({opacity : 0});
                    	a23=0;
                	}
                	if(wt<lastscroll23 && a23==0){
                		$('#part3l3,#part3m3,#part3r3').animate({opacity : 1});
                    	a23=1;
                	}
                }
                lastscroll23=wt;
                break;
            case 41:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll31 && a31==0){
                		$('#demp').animate({opacity : 1});
                    	a31=1;
                	}
                	if(wt<lastscroll31 && a31==1){
                		$('#demp').animate({opacity : 0});
                    	a31=0;
                	}
                }
                if(wt<xb  && wb>xb && xt<wt){
                	if(wt>lastscroll31 && a31==1){
                		$('#demp').animate({opacity : 0});
                    	a31=0;
                	}
                	if(wt<lastscroll31 && a31==0){
                		$('#demp').animate({opacity : 1});
                    	a31=1;
                	}
                }
                lastscroll31=wt;
                break;
            case 42:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll32 && a32==0){
                		$('#pwebp').animate({opacity : 1});
                    	a32=1;
                	}
                	if(wt<lastscroll32 && a32==1){
                		$('#pwebp').animate({opacity : 0});
                    	a32=0;
                	}
                }
                if(wt<xb  && wb>xb && xt<wt){
                	if(wt>lastscroll32 && a32==1){
                		$('#pwebp').animate({opacity : 0});
                    	a32=0;
                	}
                	if(wt<lastscroll32 && a32==0){
                		$('#pwebp').animate({opacity : 1});
                    	a32=1;
                	}
                }
                lastscroll32=wt;
                break;
            case 43:
                if(wb>xt && xt>wt && xb>wb){
                	if(wt>lastscroll33 && a33==0){
                		$('#mcpcp').animate({opacity : 1});
                    	a33=1;
                	}
                	if(wt<lastscroll33 && a33==1){
                		$('#mcpcp').animate({opacity : 0});
                    	a33=0;
                	}
                }
                if(wt<xb  && wb>xb && xt<wt){
                	if(wt>lastscroll33 && a33==1){
                		$('#mcpcp').animate({opacity : 0});
                    	a33=0;
                	}
                	if(wt<lastscroll33 && a33==0){
                		$('#mcpcp').animate({opacity : 1});
                    	a33=1;
                	}
                }
                lastscroll33=wt;
                break;
        }
    }
    function multicalls(){
        myfunction(21);
        myfunction(22);
        myfunction(23);
        myfunction(31);
        myfunction(32);
        myfunction(33);
        myfunction(41);
        myfunction(42);
        myfunction(43);
    }
    function firsthide(){
        $('#part2l,#part2m,#part2r,.partofpart3,#demp,#pwebp,#mcpcp').css("opacity","0");
        $(window).scroll(function(){
            multicalls();
        });
    }
    firsthide();
});