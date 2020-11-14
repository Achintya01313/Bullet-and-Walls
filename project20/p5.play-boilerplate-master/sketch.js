var bullet,wall;
var speed,weight,thickness;
var car;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  
}

function draw() {
  background(255,255,255);  
  
  car=createSprite(50,200,30,10)
 wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500
 
  drawSprites();

if(deformation<100){
  car.shapeColor(0,255,0);
}

if (deformation>100&&deformation<180){
car.shapeColor(255,255,0);
}

if(deformation>180){
car.shapeColor(255,0,0);
}

}