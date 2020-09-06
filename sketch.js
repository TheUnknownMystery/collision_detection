function setup() {

  createCanvas(1200,1200);
  
//creating sprites

movingRect=createSprite(400, 200, 80, 30);

movingRect.shapeColor="green";

fixedRect=createSprite(200,200,50,80);

fixedRect.shapeColor="green";

gameObj1=createSprite(100,100,50,50);

gameObj2=createSprite(200,100,50,50);

gameObj3=createSprite(300,100,50,50);

gameObj4=createSprite(400,400,50,50);

}

function draw() {

  background(255,255,255); 

  movingRect.x=World.mouseX;

  movingRect.y=World.mouseY;

  //console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,gameObj2)){
  
   movingRect.shapeColor="red";
   gameObj2.shapeColor="red" ;
  }

  else{
    movingRect.shapeColor="green";
   gameObj2.shapeColor="green" ;


  }

  
  drawSprites();

}

