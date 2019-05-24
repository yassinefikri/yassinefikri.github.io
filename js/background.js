/*-------------------------------------------|
|      Space Moving Background Animation     |
|           author : Yassine Fikri           |
--------------------------------------------*/


var canvas = document.querySelector("canvas");

var ww=document.body.clientWidth;
var wh=window.innerHeight;

canvas.width=ww;
canvas.height=wh;
canvas.style.backgroundColor= "rgb(1, 0, 7)";

var c= canvas.getContext("2d");

function Star(posx,posy){
    //Coordonnees
    this.posx= posx;
    this.posy= posy; 
    this.ray= 0; //Rayon
    this.opc= Math.random(); //Opacity

    this.dx= (this.posx-ww/2)/100;
    this.dy= (this.posy-wh/2)/100;

    this.draw= function(){
        c.beginPath();
        c.fillStyle="rgba(255,255,255,"+this.opc+")";
        c.rect(this.posx,this.posy,this.ray,this.ray);
        c.fill();
    }

    this.update= function(){
        this.posx+=this.dx;
        this.posy+=this.dy;

        if(Math.abs(this.dx)<2 && Math.abs(this.dy)<2){
            if(this.ray<3) this.ray+=0.001;
        }
        else {
            if(this.ray<5) this.ray+=0.03;
        }

        this.draw();
        if(this.posx-this.ray>ww || this.posx+this.ray<0) this.reset();
        if(this.posy-this.ray>wh || this.posy+this.ray<0) this.reset();
    }

    this.reset= function(){
        this.posx=ww/2;
        this.posy=wh/2;
        this.ray=0;
    }
}

var stars = new Array(250);
for(var i=0;i<250;i++){
    stars[i]= new Star(Math.random()*ww,Math.random()*wh);
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,ww,wh);
    for(var i=0;i<250;i++){
        stars[i].update();
    }
}
animate();

function resize() {
	wh= window.innerHeight;
    ww= document.body.clientWidth; 
    canvas.height=wh;
    canvas.width=ww;
    for(var i=0;i<250;i++) {
        stars[i].posx= Math.random()*ww;
        stars[i].posy= Math.random()*wh;
        stars[i].dx= (stars[i].posx-ww/2)/50;
        stars[i].dy= (stars[i].posy-wh/2)/50;
    }
}
window.onresize = resize;