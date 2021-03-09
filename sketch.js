var player, playerAnimation;
var bird, birdAnimation;
var bg, bgImg;
var coin, coinImg, coinScore=0;
var car, carImg;
var distance= 0;
var edges;
var basket, basketImg, bomb, bombImg, fruit, bg2Img, bg2;
var appleImg, bananaImg, melonImg, orangeImg, pineappleImg;
var citySetup, plantSetup, medicalShop, games, shopImg;
var money=0, buildings=0, buildingsLeft=20;
var menuBg, menuBgImg;
var bankImg, collegeImg1, collegeImg2, groceryImg, hospitalImg1, hospitalImg2;
var houseImg1, houseImg2, houseImg3, mallImg, officeImg1, officeImg2,parkImg1;
var parkImg2, pharamacyImg, restaurantImg, schoolImg1, schoolImg2, stationaryImg;
var toyShopImg;
var game1Button, game2Button;
var gameState= "start";
var form, building;
var closeButton

function preload(){

  //loading running game images
//     playerAnimation= loadAnimation("girl1.png", "girl2.png","girl3.png","girl4.png","girl5.png",
//     "girl6.png","girl7.png","girl8.png");
  
//     birdAnimation= loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png",
//     "bird6.png","bird7.png","bird8.png","bird9.png","bird10.png","bird11.png","bird12.png",
//     "bird13.png","bird14.png")
  
//     bgImg= loadImage("bg.jpg");
//     coinImg= loadImage("coin.png");
//     carImg= loadImage("car.png");

//loading menu image items
closeButton= loadImage("close.png");
shopImg= loadImage("shopSymbol.png");
menuBgImg= loadImage("menuBg.jpg");
bankImg= loadImage("citySetup/bank.png");
collegeImg1= loadImage("citySetup/college1.png");
collegeImg2= loadImage("citySetup/college2.png");
groceryImg= loadImage("citySetup/groceryStore.png");
hospitalImg1= loadImage("citySetup/hospital1.png");
hospitalImg2= loadImage("citySetup/hospital2.png");
houseImg1= loadImage("citySetup/house1.png");
houseImg2= loadImage("citySetup/house2.png");
houseImg3= loadImage("citySetup/house3.png");
mallImg= loadImage("citySetup/mall.png");
officeImg1= loadImage("citySetup/office.png");
officeImg2= loadImage("citySetup/office2.png");
parkImg1= loadImage("citySetup/park1.png");
parkImg2= loadImage("citySetup/park2.png");
pharmacyImg= loadImage("citySetup/pharmacy.png");
restaurantImg= loadImage("citySetup/restaurant.png");
schoolImg1= loadImage("citySetup/school1.png");
schoolImg2= loadImage("citySetup/school2.png");
stationaryImg= loadImage("citySetup/stationary.png");
toyShopImg= loadImage("citySetup/toyShop.png");

//loading fruit game images
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

  createCanvas(displayWidth,displayHeight);

  //creating running game background, sprites and groups
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

  //creating fruit game background, sprites and groups
  // bg2= createSprite(600,300,1200,800);
  // bg2.addImage(bg2Img);
  // bg2.scale= 1.1;

  // basket= createSprite(400,500);
  // basket.addImage(basketImg);
  // basket.scale= 0.80;

  // fruitGroup= new Group();
  // bombGroup= new Group();
  form= new Form();
  edges= createEdgeSprites();
}

function draw(){

  background(menuBgImg);

  if(gameState==="citySupplies"){
    form.hide();
    
  }

  //operations for running game
  // player.collide(edges);
  // distance= distance+1;

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

  //operations for fruit game
  // basket.collide(edges);

  // if(keyIsDown(LEFT_ARROW)){
  //   basket.x= basket.x-20;
  // }
  // if(keyIsDown(RIGHT_ARROW)){
  //   basket.x= basket.x+20;
  // }

  // for(var i=0; i<fruitGroup.length; i++){
  //   if(fruitGroup.get(i).isTouching(basket)){
  //     fruitGroup.get(i).destroy();
  //     score+=1;
  //   }
  // }

  // calling all functions
    // spawnCoins();
    // spawnBirds();
    // spawnCars();
    // spawnFruits();
    // spawnBombs();
  

  if(gameState==="start"){
    textSize(90);
    fill("black");
    stroke(7);
    text("MENU", 550, 80);
  
    textSize(20);
    fill("black");
    stroke(8);
    text("CITY SUPPLIES",50,500);
  
    textSize(20);
    fill("black");
    stroke(8);
    text("MEDICAL SHOP", 300,500);
  
    textSize(20);
    fill("black");
    stroke(8);
    text("PLANT SETUP SUPPLIES",530,500);
  
    textSize(30);
    fill("yellow");
    stroke(5);
    text("MONEY: "+ "Rs "+money,40,200);
  
    textSize(30);
    fill("yellow");
    stroke(5);
    text("CITY BUILDINGS BUILT: "+buildings,450,200);
  
    textSize(30);
    fill("yellow");
    stroke(5);
    text("CITY BUILDINGS LEFT: "+buildingsLeft, 930,200);
  }
  form.display();
  //giving text for menu screen
 

  //for fruit game
  // textSize(30);
  // fill("yellow");
  // stroke(5);
  // text("SCORE: "+score,600,40);

  //for running game
  // textSize(30);
  // fill("black");
  // stroke(5);
  // text("DISTANCE: "+score,500,40);

  // textSize(30);
  // fill("black");
  // stroke(5);
  // text("COINS: "+coinScore,30,40);
  drawSprites();
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
  
