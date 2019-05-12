function myfunction(classnbr){
    var xt= $('.partofpart'+classnbr).offset().top;
    var xb=xt+$('.partofpart'+classnbr).height();
    var wt=$(window).scrollTop();
    var wb=wt+window.innerHeight;
    //console.log("myfunction : "+ classnbr+" called" );
    switch(classnbr) {
        case 2:
            if(wb>xt && wt>lastscroll1 && xt>wt && xb>wb && a1==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a1=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll1 && xt>wt && xb>wb && a1==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a1=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt>lastscroll1 && wb>xb && xt<wt && a1==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a1=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt<lastscroll1 && wb>xb && xt<wt && a1==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a1=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll1=wt;
            break;
        case 3:
            if(wb>xt && wt>lastscroll2 && xt>wt && xb>wb && a2==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a2=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll2 && xt>wt && xb>wb && a2==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a2=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt>lastscroll2 && wb>xb && xt<wt && a2==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a2=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt<lastscroll2 && wb>xb && xt<wt && a2==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a2=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll2=wt;
            break;
        case 4:
            if(wb>xt && wt>lastscroll3 && xt>wt && xb>wb && a3==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a3=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll3 && xt>wt && xb>wb && a3==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a3=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt>lastscroll3 && wb>xb && xt<wt && a3==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a3=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt<lastscroll3 && wb>xb && xt<wt && a3==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a3=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll3=wt;
            break;
    }
}


function myfunction(classnbr){
    var xt= $('.partofpart'+classnbr).offset().top;
    var xb=xt+$('.partofpart'+classnbr).height();
    var wt=$(window).scrollTop();
    var wb=wt+window.innerHeight;
    //console.log("myfunction : "+ classnbr+" called" );
    switch(classnbr) {
        case 2:
            if(wb>xt && wt>lastscroll1 && xt>wt && xb>wb && a1==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a1=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll1 && xt>wt && xb>wb && a1==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a1=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt>lastscroll1 && wb>xb && xt<wt && a1==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a1=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt<lastscroll1 && wb>xb && xt<wt && a1==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a1=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll1=wt;
            break;
        case 3:
            if(wb>xt && wt>lastscroll2 && xt>wt && xb>wb && a2==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a2=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll2 && xt>wt && xb>wb && a2==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a2=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt>lastscroll2 && wb>xb && xt<wt && a2==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a2=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt<lastscroll2 && wb>xb && xt<wt && a2==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a2=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll2=wt;
            break;
        case 4:
            if(wb>xt && wt>lastscroll3 && xt>wt && xb>wb && a3==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a3=1;
                console.log("class "+classnbr+" shown // 1");
            }
            if(wb>xt && wt<lastscroll3 && xt>wt && xb>wb && a3==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a3=0;
                console.log("class "+classnbr+" hidden // 2");
            }
            if(wt<xb && wt>lastscroll3 && wb>xb && xt<wt && a3==1){
                $('.partofpart'+classnbr).animate({opacity : 0});
                a3=0;
                console.log("class "+classnbr+" hidden // 1");
            }
            if(wt<xb && wt<lastscroll3 && wb>xb && xt<wt && a3==0){
                $('.partofpart'+classnbr).animate({opacity : 1});
                a3=1;
                console.log("class "+classnbr+" shown // 2");
            }
            lastscroll3=wt;
            break;
    }
}