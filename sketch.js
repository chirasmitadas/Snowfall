//background variables declare
//sprite variable , sprite picture variable
var character;
var physicsEngine, physicsWorld;
var snowfallArray=[];
function preload(){
  //background load Image
  //sprite charater picture load
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  physicsEngine= Matter.Engine.create();
  physicsWorld = physicsEngine.world;
  character = createSprite(400, 200, 50, 50);

  //snowfall = new Snow(50,50, 70,70);
 var x =50;
  for(var i=0;i<20;i++){
    
    snowfallArray.push(new Snow(50, 50, 70,70));
    x=x+100;
  }
}

function draw() {
  background("black"); 
  Matter.Engine.update(physicsEngine);
  for(var i =0; i<snowfallArray.length;i++){
    snowfallArray[i].display();
  }
 
  if (keyDown("space")){

  }
  //add gravity

  if (keyDown("left")){
    character.x = character.x -5;
  }

  if (keyDown("right")){

  }
  drawSprites();
}