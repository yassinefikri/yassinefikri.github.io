/*Author : Yassine Fikri*/

$(document).ready(function(){
    var degg=90;
    $("#menup").click(function(){
        rotate('#menup');
        $("#menu").toggleClass("menu");
        $("#menu").toggleClass("mobmenuopened");
        $("#menu>ul>li").toggleClass("mobmenuopenedli");
        $("#menu>ul").toggleClass("mobmenuopenedlu");
    })
    function rotate(imgid){
    	$(imgid).animate({deg: degg},{duration: 300,
            step: function(now) {
              $(imgid).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }
        );
        degg=degg+90;
    }

    function menuclickclassremove(){
        if($("#menu").hasClass("mobmenuopened")){
            $("#menu").removeClass("mobmenuopened");
            $("#menu>ul>li").removeClass("mobmenuopenedli");
            $("#menu>ul").removeClass("mobmenuopenedlu");
            $("#menu").addClass("menu");
            rotate('#menup');
        }
    }


    $('.end>img').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'medium');
    });
    $('#mn1').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part1").offset().top
        }, 1000);
    })
    $('#mn2').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part2").offset().top
        }, 1000);
    })
    $('#mn3').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part3").offset().top
        }, 1000);
    })
    $('#mn4').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part4").offset().top
        }, 1000);
    })
    $('#mn5').click(function(){
        menuclickclassremove();
        $('html, body').animate({
            scrollTop: $("#part5").offset().top
        }, 1000);
    })
    $('.godicon').click(function(){
        $('html, body').animate({
            scrollTop: $("#part2").offset().top
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
        $(this).animate({opacity : 1});
  
    });
    $("#dem,#pweb,#mcpc").mouseout(function(){
        $(this).animate({opacity : 0.7});
    });

    //Hide & Show Parts

    //a vars to avoid hide when already hidden /show when already shown
    var a1=0;
    var a21=0;
    var a22=0;
    var a23=0;
    var a3=0;
    var lastscroll1 = $(window).scrollTop();
    var lastscroll21 = $(window).scrollTop();
    var lastscroll22 = $(window).scrollTop();
    var lastscroll23 = $(window).scrollTop();
    var lastscroll3 = $(window).scrollTop();
    function myfunction(classnbr){
        //for part 2 and 4
        if(classnbr<5){
            var xt= $('.partofpart'+classnbr).offset().top;
            var xb=xt+$('.partofpart'+classnbr).height();
            var wt=$(window).scrollTop();
            var wb=wt+window.innerHeight;
        }
        //for part 3
        else{
            switch(classnbr){
                case 31:
                    var xt= $('#part3l1').offset().top;
                    var xb=xt+$('#part3l1').height();
                    var wt=$(window).scrollTop();
                    var wb=wt+window.innerHeight;
                    break;
                case 32: 
                    var xt= $('#part3l2').offset().top;
                    var xb=xt+$('#part3l2').height();
                    var wt=$(window).scrollTop();
                    var wb=wt+window.innerHeight;
                    break;
                case 33:
                    var xt= $('#part3l3').offset().top;
                    var xb=xt+$('#part3l3').height();
                    var wt=$(window).scrollTop();
                    var wb=wt+window.innerHeight;
                    break;
            }
        }
        switch(classnbr) {
            case 2:
                if(wb>xt && wt>lastscroll1 && xt>wt && xb>wb && a1==0){
                    $('.partofpart'+classnbr).animate({opacity : 1});
                    a1=1;
                }
                if(wb>xt && wt<lastscroll1 && xt>wt && xb>wb && a1==1){
                    $('.partofpart'+classnbr).animate({opacity : 0});
                    a1=0;
                }
                if(wt<xb && wt>lastscroll1 && wb>xb && xt<wt && a1==1){
                    $('.partofpart'+classnbr).animate({opacity : 0});
                    a1=0;
                }
                if(wt<xb && wt<lastscroll1 && wb>xb && xt<wt && a1==0){
                    $('.partofpart'+classnbr).animate({opacity : 1});
                    a1=1;
                }
                lastscroll1=wt;
                break;
            case 31:
                if(wb>xt && wt>lastscroll21 && xt>wt && xb>wb && a21==0){
                    $('#part3l1,#part3m1,#part3r1').animate({opacity : 1});
                    a21=1;
                }
                if(wb>xt && wt<lastscroll21 && xt>wt && xb>wb && a21==1){
                    $('#part3l1,#part3m1,#part3r1').animate({opacity : 0});
                    a21=0;
                }
                if(wt<xb && wt>lastscroll21 && wb>xb && xt<wt && a21==1){
                    $('#part3l1,#part3m1,#part3r1').animate({opacity : 0});
                    a21=0;
                }
                if(wt<xb && wt<lastscroll21 && wb>xb && xt<wt && a21==0){
                    $('#part3l1,#part3m1,#part3r1').animate({opacity : 1});
                    a21=1;
                }
                lastscroll21=wt;
                break;
            case 32:
                if(wb>xt && wt>lastscroll22 && xt>wt && xb>wb && a22==0){
                    $('#part3l2,#part3m2,#part3r2').animate({opacity : 1});
                    a22=1;
                }
                if(wb>xt && wt<lastscroll22 && xt>wt && xb>wb && a22==1){
                    $('#part3l2,#part3m2,#part3r2').animate({opacity : 0});
                    a22=0;
                }
                if(wt<xb && wt>lastscroll22 && wb>xb && xt<wt && a22==1){
                    $('#part3l2,#part3m2,#part3r2').animate({opacity : 0});
                    a22=0;
                }
                if(wt<xb && wt<lastscroll22 && wb>xb && xt<wt && a22==0){
                    $('#part3l2,#part3m2,#part3r2').animate({opacity : 1});
                    a22=1;
                }
                lastscroll22=wt;
                break;
            case 33:
                if(wb>xt && wt>lastscroll23 && xt>wt && xb>wb && a23==0){
                    $('#part3l3,#part3m3,#part3r3').animate({opacity : 1});
                    a23=1;
                }
                if(wb>xt && wt<lastscroll23 && xt>wt && xb>wb && a23==1){
                    $('#part3l3,#part3m3,#part3r3').animate({opacity : 0});
                    a23=0;
                }
                if(wt<xb && wt>lastscroll23 && wb>xb && xt<wt && a23==1){
                    $('#part3l3,#part3m3,#part3r3').animate({opacity : 0});
                    a23=0;
                }
                if(wt<xb && wt<lastscroll23 && wb>xb && xt<wt && a23==0){
                    $('#part3l3,#part3m3,#part3r3').animate({opacity : 1});
                    a23=1;
                }
                lastscroll23=wt;
                break;
            case 4:
                if(wb>xt && wt>lastscroll3 && xt>wt && xb>wb && a3==0){
                    $('.partofpart'+classnbr).animate({opacity : 1});
                    a3=1;
                }
                if(wb>xt && wt<lastscroll3 && xt>wt && xb>wb && a3==1){
                    $('.partofpart'+classnbr).animate({opacity : 0});
                    a3=0;
                }
                if(wt<xb && wt>lastscroll3 && wb>xb && xt<wt && a3==1){
                    $('.partofpart'+classnbr).animate({opacity : 0});
                    a3=0;
                }
                if(wt<xb && wt<lastscroll3 && wb>xb && xt<wt && a3==0){
                    $('.partofpart'+classnbr).animate({opacity : 1});
                    a3=1;
                }
                lastscroll3=wt;
                break;
        }
    }
    function multicalls(){
        myfunction(2);
        myfunction(31);
        myfunction(32);
        myfunction(33);
        myfunction(4);
    }
    function firsthide(){
        $('.partofpart2,.partofpart3,.partofpart4').css("opacity","0");
        $(window).scroll(function(){
            multicalls();
        });
    }
    firsthide();
});