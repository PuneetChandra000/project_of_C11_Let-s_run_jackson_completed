// declaring sprites
var coin, coinImg;
var bomb, bombImg;
var energyDrink, energyDrinkImg;
var path, pathImg;
var power, powerImg;
var runner, runner_running;

function preload(){
  //pre-loading images
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,500);
  //creating sprites and adding images
  path = createSprite(200,200);
  path.addImage(pathImg);
  coin = createSprite(200,1);
  coin.addImage(coinImg);
  bomb = createSprite(100,300);
  bomb.addImage(bombImg);
  energyDrink = createSprite(300,200);
  energyDrink.addImage(energyDrinkImg);
  runner = createSprite(200,500);
  // adding Animation
  runner.addAnimation("running", runner_running);
  

}

function draw() {
  // setting background
  background("black");
  // setting scale and velocity
  coin.scale = 0.15;
  coin.velocityY = 2;
  bomb.scale = 0.05;
  bomb.velocityY = 2;
  energyDrink.scale = 0.06;
  energyDrink.velocityY = 2;
  runner.scale = 0.06;
  runner.velocityY = -2;
  path.scale = 1.2;
  path.velocityY = 2;
  // if condition
  if(path.y > 500||coin.y > 500||bomb.y > 500||energyDrink.y > 500){
    path.y = 0;
    coin.y = 0;
    bomb.y = 0;
    energyDrink.y = 0;

    if(runner.collide(energyDrink)){
      energyDrink.destroy();
      energyDrink = createSprite(300,200);
      energyDrink.addImage(energyDrinkImg);
      energyDrink.scale = 0.06;
    } 

    if(runner.collide(coin)){
      coin.destroy();
      coin = createSprite(200,200);
      coin.addImage(coin.png);
      coin.scale = 0.15;
    }

    if(runner.collide(bomb)){
        runner.destroy();
    }
  }
  // drawing sprites
  drawSprites();

}
