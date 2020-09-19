//create the variables for the thickness and wall
var thickness, wall;
//create the variables for speed, bullet and weight
var bullet, speed, weight;

function setup() {
  //create the canvas
  createCanvas(1600,400);

  //set the random values for the speed and weight
  speed.random(223,321);
  weight.random(30,52);
  thickness.random(22,83);

  //create a sprite for the car
  car.createSprite(50,200,50,50);
  //set the velocity for the car
  car.velocityX = speed;

  //create a sprite for the wall
  wall.createSprite(1500,200,thickness,height/2);
  //set the color to the wall
  wall.shapeColor = color(80,80,80);

  
}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if(damge>10){
     wall.shapeColor = "red";
   }

   if(damage<10){
     wall.shapeColor = "green";
   }

  }

  drawSprites();
}

function hasCollided(bullet, wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}