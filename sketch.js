var player, playerAnimation;
var bird, birdAnimation;
var bg, bgImg;
var coin, coinImg, coinScore=0;
var car, carImg;
var score= 0;
var edges;
var basket, basketImg, bomb, bombImg, fruit, bg2Img, bg2;
var appleImg, bananaImg, melonImg, orangeImg, pineappleImg;

function preload(){
//     playerAnimation= loadAnimation("girl1.png", "girl2.png","girl3.png","girl4.png","girl5.png",
//     "girl6.png","girl7.png","girl8.png");
  
//     birdAnimation= loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png",
//     "bird6.png","bird7.png","bird8.png","bird9.png","bird10.png","bird11.png","bird12.png",
//     "bird13.png","bird14.png")
  
//     bgImg= loadImage("bg.jpg");
//     coinImg= loadImage("coin.png");
//     carImg= loadImage("car.png");

coinImg= loadImage("coin.png");
basketImg= loadImage("basket2.png");
bombImg= loadImage("bomb.png");
appleImg= loadImage("apple2.png");
bananaImg= loadImage("banana2.png");
melonImg= loadImage("melon2.png");
orangeImg= loadImage("orange2.png");
pineappleImg= loadImage("pineapple2.png");
bg2Img= loadImage("jungle.jpg");
}

function setup(){

  createCanvas(900,600);

  // bg= createSprite(600,300,1200,800);
  // bg.addImage(bgImg);
  // bg.scale= 2;
  // bg.velocityX= -3;
  // bg.x= bg.width/2;
  
  // player= createSprite(100,450);
  // player.addAnimation("running",playerAnimation);
  // player.scale= 0.50;

  // coinGroup= new Group();
  // birdGroup= new Group();
  // carGroup= new Group();

  bg2= createSprite(600,300,1200,800);
  bg2.addImage(bg2Img);
  bg2.scale= 1.1;

  basket= createSprite(400,500);
  basket.addImage(basketImg);
  basket.scale= 0.80;

  fruitGroup= new Group();
  bombGroup= new Group();

  edges= createEdgeSprites();
}

function draw(){

  background("grey");
  basket.collide(edges);

  if(keyIsDown(LEFT_ARROW)){
    basket.x= basket.x-20;
  }
  if(keyIsDown(RIGHT_ARROW)){
    basket.x= basket.x+20;
  }

  for(var i=0; i<fruitGroup.length; i++){
    if(fruitGroup.get(i).isTouching(basket)){
      fruitGroup.get(i).destroy();
      score+=1;
    }
  }

  // player.collide(edges);
  // score= score+1;

  // if(bg.x<0){
  //   bg.x= bg.width/2
  // }

  // if(keyIsDown(UP_ARROW)){
  //   player.y= player.y-10;
  // }
  // if(keyIsDown(DOWN_ARROW)){
  //   player.y= player.y+10;
  // }

  // for(var i=0; i<coinGroup.length; i++){
  //   if(coinGroup.get(i).isTouching(player)){
  //       coinGroup.get(i).destroy();
  //       coinScore+=1;
  //   }
  //   }

  //   spawnCoins();
  //   spawnBirds();
  //   spawnCars();

  spawnFruits();
  spawnBombs();
  drawSprites();

  textSize(30);
  fill("yellow");
  stroke(5);
  text("SCORE: "+score,600,40);

  // textSize(30);
  // fill("black");
  // stroke(5);
  // text("SCORE: "+score,500,40);

  // textSize(30);
  // fill("black");
  // stroke(5);
  // text("COINS: "+coinScore,30,40);
}

function spawnCoins(){
  
    if(frameCount%20===0){
      
      coin= createSprite(1000,10);
      coin.y= Math.round(random(500,5));
      coin.velocityX= -4;
      coin.addImage(coinImg);
      coin.scale= 0.09;
      coin.lifetime= 500;
      coin.velocityX = -(3 + score/200);
      coinGroup.add(coin);
     }
  }
  
  function spawnBirds(){
    if(frameCount%90===0){
      bird= createSprite(1000,10);
      bird.y= Math.round(random(400,10));
      bird.velocityX= -3;
      bird.scale= 0.50;
      bird.addAnimation("flying",birdAnimation);
      bird.lifetime= 500;
      birdGroup.add(bird);
    }
  }

  function spawnCars(){
    if(frameCount%90===0){
      car= createSprite(900,500);
      car.y= Math.round(random(600,400));
      car.addImage(carImg);
      car.velocityX= -3;
      car.scale= 0.1;
      car.lifetime= 500;
      carGroup.add(car);
    }
  }

  
function spawnFruits(){
  if(frameCount%30===0){
    fruit= createSprite(10,10);
    fruit.x= Math.round(random(100,800));
    fruit.velocityY= (3 + score/10);
    var rand= Math.round(random(1,5));
    switch(rand){
      case 1: fruit.addImage(appleImg);
      break;
      case 2: fruit.addImage(orangeImg);
      break;
      case 3: fruit.addImage(pineappleImg);
      break;
      case 4: fruit.addImage(melonImg);
      break;
      case 5: fruit.addImage(bananaImg);
      default: break;
    }
    fruit.lifetime= 400;
    fruitGroup.add(fruit);
  }
}

function spawnBombs(){
  if(frameCount%80===0){
    bomb= createSprite(10,10);
    bomb.addImage(bombImg);
    bomb.scale= 0.120;
    bomb.x= Math.round(random(100,800));
    bomb.velocityY= (3+score/40);
    bomb.lifetime= 400;
    bombGroup.add(bomb);
  }
}
  