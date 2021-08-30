var boyimg, boy;
var gameState = 0;

function preload() {
  boyknifeimg= loadAnimation("knife.png","KNIFE2.png","KNIFE3.png","KNIFE4.png","KNIFE6.png")
boyjetpackimg=loadAnimation("JETPACK1.png","JETPACK2.png","JETPACK3.png")
boygunimg=loadAnimation("GUN1.png","GUN2.png","GUN3.png")
  jetpackimg=loadImage("JETPACKICON.png")
  knifeimg=loadImage("KNIFEICON.png")
  gunimg = loadImage("GUNICON.png")
  boyimg=loadAnimation("RUNNING1.png","RUNNING2.png","RUNNING3.png","RUNNING4.png","RUNNING5.png","RUNNING6.png","RUNNING7.png")
  bg=loadImage("bg3.gif")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  boy=createSprite(windowWidth/2,100)
  boy.addAnimation("running",boyimg)
  boy.addAnimation("boyjetpack",boyjetpackimg)
  boy.addAnimation("boyknife",boyknifeimg)
  boy.addAnimation("boygun",boygunimg)
  boy.debug=true
  boy.setCollider("circle",0,0,30)

jetpack=createSprite(300,100)
jetpack.addImage(jetpackimg)
jetpack.debug=true
jetpack.setCollider("circle",0,0,40)

knife=createSprite(500,100)
knife.addImage(knifeimg)
knife.setCollider("circle",0,0,40)

gun=createSprite(700,100)
gun.addImage(gunimg)
gun.setCollider("circle",0,0,40)

boy.velocityX=2

about=createSprite(100,100,50,50)
story=createSprite(100,200,50,50)
forward=createSprite(windowWidth-100,100,50,50)
backward=createSprite(windowWidth-100,200,50,50)
  
}

function draw() {
  background("black");

  if(boy.isTouching(jetpack)){
    boy.changeAnimation("boyjetpack",boyjetpackimg)
  }


  if(boy.isTouching(knife)){
    boy.changeAnimation("boyknife",boyknifeimg)
    
  }

  if(boy.isTouching(gun)){
    boy.changeAnimation("boygun",boygunimg)
  }

drawSprites()

}

function startGame(){
  
}