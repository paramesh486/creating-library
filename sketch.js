var fixedRect, movingRect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  gameobject1=createSprite(50,50,50,50);
  gameobject2=createSprite(200,50,50,50);
  gameobject3=createSprite(300,50,50,50);
  gameobject4=createSprite(400,50,50,50);

  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  gameobject1.velocityX=  3;
  gameobject2.velocityX=-3;


if(isTouching(gameobject1,gameobject2))
{
  gameobject1.shapeColor = "red";
  gameobject2.shapeColor = "red";
}
else{
  gameobject1.shapeColor = "green";
  gameobject2.shapeColor = "green";
}
  
  drawSprites();
}

