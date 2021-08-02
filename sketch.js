var road, jaxon, roadImg, jaxonImg, rightInvisible, leftInvisible;

function preload(){
  //pre-load images
  roadImg = loadImage("path.png");
  jaxonImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,750);
  //create sprites here
  road = createSprite(200, 375);
  road.addImage("path", roadImg);
  road.velocityY = 4;
  road.scale = 1.3;
  road.y = road.height/2;

  jaxon = createSprite(200, 650);
  jaxon.addAnimation("boy", jaxonImg);
  jaxon.scale = 0.11;

  rightInvisible = createSprite(385, 375, 20, 750);
  rightInvisible.visible = false;
  leftInvisible = createSprite(20, 375, 20, 750);
  leftInvisible.visible = false;
}

function draw() {
  background(0);
  jaxon.x = mouseX;

  if(road.y > 650){
    road.y = road.height/2;
  }

  jaxon.collide(rightInvisible);
  jaxon.collide(leftInvisible);

  drawSprites();
}
