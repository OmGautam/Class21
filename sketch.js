var fixedRect,movingRect;
var myObject1;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,70,50);
  movingRect = createSprite(500,200,50,70);

  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;
  
}

function draw() {
  background("black");  
  
  if(bounceOff(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  } 

  if(isTouching(movingRect,fixedRect)){
    myObject1 = createSprite(300,100,50,50);
  }

  drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2){
      object1.velocityX = -1 * object1.velocityX;
      object2.velocityX = -1 * object2.velocityX;
      return true;
    }
  
    if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
        object1.velocityY = -1 * object1.velocityY;
        object2.velocityY = -1 * object2.velocityY;
      }
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2){
      return true
    }
}

