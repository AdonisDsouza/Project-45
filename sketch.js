var canvas;
var background1, backgroundImg;
var mario, marioImg; 
var invisibleGround
var gameState = 0;

function preload(){
    //creating the background image
    backgroundImg = loadImage("background1.jpg");
    marioImg = loadAnimation("Mario1.png", "Mario2.png");

}


function setup(){
    canvas = createCanvas(displayWidth , displayHeight-80);

    background1 = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    background1.addImage("backgroundImg1",backgroundImg);
    background1.scale = 0.54;

    //Creating the Mario character
    mario = createSprite(80,displayHeight-150,40,50);
    mario.addAnimation("MarioWalking",marioImg);
    mario.scale = 0.35;

    invisibleGround = createSprite(width/2,height-20,width,10);
    invisibleGround.visible = false;
}


function draw(){

    mario.velocityX = 0;

    if(keyDown("space")) {
        mario.velocityY = -12;

      }

      mario.velocityY = mario.velocityY + 0.55

      if(keyDown("RIGHT_ARROW")) {
          mario.velocityX= 2;
      }

      /*if(keyDown("LEFT_ARROW")) {
          mario.velocityX = -2;
      }*/
    mario.collide(invisibleGround);
    console.log(mario.y);
    drawSprites();
}
