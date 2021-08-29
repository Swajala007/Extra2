const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;


var bg_img;

var spidy;


function preload()
{
  bg_img = loadImage('rain.gif');
  spidy = loadImage('s2.png');
  tanker = loadImage('d1.png');
  tanker1 = loadImage('d2.png');
  water1 = loadImage('w3.png');
  h1 = loadImage('h1.png');
  h2 = loadImage('h2.png');
  h3 = loadImage('h3.png');
  spidy1 = loadAnimation('s1.png');
 
bk_song = loadSound("backgroundsound1.mpeg");
smile_song = loadSound('backgroundsound.mpeg')
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  bk_song.loop();
  bk_song.setVolume(1);

  spider = createSprite(600,320,100,100);
  spider.addImage(spidy);
  spider.addAnimation(spidy1);
  spider.scale = 0.8;
  

  tank = createSprite(50,200,100,100);
  tank.addImage(tanker);
  tank.scale = 3;

  tank1 = createSprite(190,400,100,100);
  tank1.addImage(tanker1);
  tank1.scale = 2;

  
  water = createSprite(320,400,200,100);
  water.addImage(water1);
  water.scale = 0.9;
  
  heart1 = createSprite(820,50,100,100);
  heart1.addImage(h1);
  heart1.addAnimation("changing",h3);
  heart1.scale = 0.6;

  heart = createSprite(520,100,100,100);
  heart.addImage(h2);
  heart.scale = 0.2;

  heart2 = createSprite(120,30,100,100);
  heart2.addImage(h2);
  heart2.scale = 0.2;

 
  
}

function draw() 
{
  background(bg_img);
  Engine.update(engine);

  if(keyDown("UP_ARROW")){
    spider.velocityY = -0.9;
  }
  spider.velocityY = spider.velocityY+0.1;

  if(keyDown("LEFT_ARROW")){
    spider.velocityX = -0.9;
  }

  if(keyDown("RIGHT_ARROW")){
    spider.velocityX = 0.9;
  }

  if(spider.isTouching(heart)){
    heart.visible = false;
   // heart.changeAnimation("changing");
  }

  if(spider.isTouching(heart2)){
    heart2.visible = false;
    //heart2.changeAnimation("changing");
  }

  if(heart2.isTouching(spider)){
    
  // smile_song.play();
   
    spider.y = 100;
    spider.x = 200;

    spider.velocityY = 0;
    spider.velocityX = 0;

  }


  drawSprites();

}


