function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColour = "green";
}

function draw() {
  background("yellow"); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  


//isTouching();
if (isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";



}else { 
   gameObject1.shapeColor = "green";
movingRect.shapeColor = "green";



}



  drawSprites();
}



