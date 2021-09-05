class createSnow{
    constructor(x,y){
        var option={
            friction:0.001,
            restitution:0.1,
            
        }
this.snow=Bodies.cricle(x,y,5,option);
this.radius=5;
var rand=Math.round(random(1,2));
var Img;
if(rand===1){
    Img="snow4.webp";
}
else{
    Img="snow5.webp";
}

this.image=loadImage(Img);
World.add(world,this.snow);

    } 
updateY(){ 
    if(this.snow.position.y > height){
         Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,800)}) 
        }
         } 
showDrop(){ 
         fill("blue") 
imageMode(CENTER); 
image(this.image,this.snow.position.x,this.snow.position.y,10,10); 

}
     

    
}