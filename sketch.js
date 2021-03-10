var car,speed,weight, wall

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 5);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(20,83)
  bullet.velocityX=speed
  wall= createSprite(1200,200,thickness,200)
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x<50){
    bullet.velocityX=0
    var D = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    if (D>10){
      bullet.shapeColor= "red"
    }
    
    if (D<100){
      bullet.shapeColor= "green"
    }
 
  }
  drawSprites();

}