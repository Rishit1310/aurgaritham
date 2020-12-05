var movingRect,fixedRect;
var obj1,obj2;
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(300, 200, 50, 50);
 fixedRect = createSprite(300,100,80,30);
 rect1 = createSprite(300,300,50,50)
 rect2 = createSprite(200,100,50,50)
 fixedRect.velocityY=3
 rect1.velocityY=-3
 //movingRect.velocityY=-1
 //fixedRect.velocityY=1
}

function draw() {
  background(255,255,255);  
  console.log(fixedRect.width/2+movingRect.width/2)
  console.log(movingRect.x)
  console.log(fixedRect.x)
  console.log(movingRect.x-fixedRect.x);
    movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(collide(movingRect,rect2)){
    movingRect.shapeColor="red"
    rect2.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    rect2.shapeColor="green"
  }
  /*if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    fixedRect.velocityX=fixedRect.velocityX*-1;
    movingRect.velocityX= movingRect.velocityX*-1;

  }
  if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY*-1;
    movingRect.velocityY= movingRect.velocityY*-1;
  }*/
  bounceoff(fixedRect,rect1)
  drawSprites();
}

