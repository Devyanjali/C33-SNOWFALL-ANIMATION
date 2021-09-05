const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var engine,world;

var background,backgroundImg;
var snow5,snow5Img;
var children,childrenImg;
var snow=[];

function preload(){
  backgroundImg=loadImage("snow1.jpg");
  snow5Img=loadImage("snow5.webp");
  childrenImg=loadImage("children.jpg");

}

function setup() {
  createCanvas(800,400);

  children=createSprite(400, 200, 50, 50);
  children.addImage(childrenImg);
  children.scale=0.3;

  if(frameCount % 50 === 0){ 
    for(var i=0; i<200; i++)
    { 
      snow.push(new createSnow(random(0,800), random(0,800)));
     }
    }
}

function draw() {
  background(backgroundImg);
Engine.update(engine);

for(var i = 0; i<200; i++){
   snow[i].showDrop(); 
   snow[i].updateY()
   }


  drawSprites();
}