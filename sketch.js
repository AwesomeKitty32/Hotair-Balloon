var bg,bg_img;
var balloon, balloon_img;

function preload(){
  bg_img = loadImage("assets/bg.png");
  balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

}

function setup(){
  bg = createSprite(165,485);
  bg.addImage(bg_img);
  bg.scale = 1.3;

  balloon = createSprite(100,200);
  balloon.addAnimation("balloon", balloon_img);
  balloon.scale = 0.25;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;

  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;
}

function draw(){

  if(keyDown("space")){
    balloon.velocityY = -6
  }
  balloon.velocityY = balloon.velocityY +1
  
  drawSprites();
}