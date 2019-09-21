/*-----------------------------------------------------------------------------|
|                      Space Moving Background Animation                       |
|                           Author : Yassine Fikri                             |
|               MIT license: http://opensource.org/licenses/MIT                |
|          More Works : https://github.com/yassinefikri/js_animations          |
------------------------------------------------------------------------------*/

var nstar1= 300; // Set the Number of Stars , default [300]
var backgroundcolor1= "radial-gradient(#000000,#090c12)"; // Set Background Color default["radial-gradient(#000000,#090c12)"]
var starsz1 = 0.045 // Set stars size increase , default [0.045]


function size1(){
    cw1= document.body.clientWidth; 
    ch1= window.innerHeight;
    canvas1.height=ch1;
    canvas1.width=cw1;
}
var canvas1= document.getElementById("can1");
canvas1.style.backgroundImage= backgroundcolor1;
size1();
var c1= canvas1.getContext("2d");

function Star(){
    this.init= function(posx,posy){
        //Coordonnees
        this.posx= posx;
        this.posy= posy; 
        this.ray= 0; //Rayon
        this.opc= Math.random(); //Opacity
        this.dx= (this.posx-cw1/2)/50;
        this.dy= (this.posy-ch1/2)/50;
        this.dr=starsz1;
        if(Math.abs(this.dx)<3 && Math.abs(this.dy)<3){
            if(this.dx<0){
                this.dx-=3;
            }
            else{
                this.dx+=3;
            }
            if(this.dy<0){
                this.dy-=3;
            }
            else{
                this.dy+=3;
            }
        }
    }
    this.draw= function(){
        c1.beginPath();
        c1.fillStyle="rgba(255,255,255,"+this.opc+")";
        c1.rect(this.posx,this.posy,this.ray,this.ray);
        c1.fill();
    }
    this.update= function(){
        this.posx+=this.dx;
        this.posy+=this.dy;
        if(this.ray>3) this.dr*=0.9;
        this.ray+=this.dr;
        this.draw();
        if(this.posx-this.ray>cw1 || this.posx+this.ray<0) this.reset();
        if(this.posy-this.ray>ch1 || this.posy+this.ray<0) this.reset();
    }
    this.reset= function(){
        this.posx=cw1/2;
        this.posy=ch1/2;
        this.ray=0;
        this.dr=starsz1;
    }
}

//Creating the Stars
var stars = new Array(nstar1);
for(var i=0;i<nstar1;i++){
    stars[i]= new Star();
    stars[i].init(Math.random()*cw1,Math.random()*ch1);
}

function animate1(){
    requestAnimationFrame(animate1);
    c1.clearRect(0,0,cw1,ch1);
    for(var i=0;i<nstar1;i++){
        stars[i].update();
    }
}
animate1();

//Resizing the Canvas1 when Resizing Window
function resize1() {
    size1();
    for(var i=0;i<nstar1;i++) {
        stars[i].init(Math.random()*cw1,Math.random()*ch1);
    }
}