var gameObject2, gameObject3;

function setup() {
  createCanvas(1200,800);
  gameObject2 = createSprite(400, 100, 50, 80);
  gameObject2.shapeColor = "orange";
  gameObject2.debug = true;
  gameObject3 = createSprite(400, 800,80,30);
  gameObject3.shapeColor = "orange";
  gameObject3.debug = true;

  gameObject3.velocityY = -5;
  gameObject2.velocityY = +5;
}

function draw() {
  background("black");

bounceOff(gameObject2,gameObject3);
 
  drawSprites();
}

