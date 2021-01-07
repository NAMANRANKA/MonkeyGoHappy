var bbb,bubu,monkey; 
var monk,stonee,stone;
var inivispace,bana,banu;
var banaG,stoneG,monkG;

var score;
var gamestate,END,PLAY;


function preload(){
  
  monk=loadImage("bb.png");
  
 bubu=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  stonee=loadImage("stone.png");
  
  banu=loadImage("banana.png");
}

function setup() {
  createCanvas(600, 300);
  
  PLAY=1;
  END=0;
  gamestate=PLAY;
  
  monkG=createGroup();
  stoneG=createGroup();
  
  bbb=createSprite(280,120,600,400);
  bbb.addImage("hello",monk);
  bbb.scale=1.8;
  bbb.velocityX=-3;
  
  monkey=createSprite(50,250);
  monkey.addAnimation("runnung",bubu);
  monkey.scale=0.15;
  monkG.add(monkey);
  monkG.setColliderEach("circle",0,0,300);
  
  invispace=createSprite(300,297,600,1);
  invispace.visible=false;
  
  score=0;
  
      

  banaG=createGroup();
}

function draw() {
  background(220);
  
  
  if (bbb.x===100){
    bbb.x=250;
  }
  
  
  
  if (gamestate===PLAY){
  
  banaba();
  stone1();
    if (banaG.isTouching(monkG)){
banaG.destroyEach();
        score=score+2;
        }
  
  
  if (stoneG.isTouching(monkG)){ 
    monkG.destroyEach();
    stoneG.destroyEach(); 
     banaG.destroyEach();
     score=score*0;
     bbb.velocityX=bbb.velocityX*0;
  gamestate=END;
    
  } else if (gamestate===END){
      monkG.destroyEach();
    
  }
  }
  monkey.collide(invispace);
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  
 if (keyDown("space") && monkey.y>100){
   monkey.velocityY=-10;
 }
  
  
  
  
  
  
  
  
  
  
  console.log(bbb.x);
  
  drawSprites();
  
  textFont(220)
  fill("white")
  text("score: "+score,470,50)
}


function banaba(){
  if (World.frameCount%90===0){
    bana=createSprite(650,200);
    bana.y=Math.round(random(100,260));
    bana.velocityX=-7;
    bana.addImage("points",banu);
    bana.scale=0.05;
    banaG.add(bana);  
    banaG.setColliderEach("circle",0,0,400);

    
   
   
}
}






function stone1(){
  
  
  if (World.frameCount%300===0){
   stone=createSprite(650,280);
   stone.velocityX=-7;
   stone.addImage("moving",stonee);
   stone.scale=0.15;
   stone.depth=monkey.depth;  
   stone.depth=stone.depth-0.5;
   stoneG.add(stone);
   
    stone.setCollider("circle",0,0,200)
  }
  
  
  
}