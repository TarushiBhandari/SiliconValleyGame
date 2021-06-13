var player, playerAnimation;
var bird, birdAnimation;
var bg, bgImg;
var coin, coinImg, coinScore=0;
var car, carImg;
var distance= 0;
var score = 0;
var edges;
var basket, basketImg, bomb, bombImg, fruit, bg2Img, bg2;
var appleImg, bananaImg, melonImg, orangeImg, pineappleImg;
var citySetup, plantSetup, medicalShop, games, shopImg;
var money=0
var food = 0, count=0;
var menuBg, menuBgImg;
var bankImg, collegeImg1, collegeImg2, groceryImg, hospitalImg1, hospitalImg2;
var houseImg1, houseImg2, houseImg3, mallImg, officeImg1, officeImg2,parkImg1;
var parkImg2, pharamacyImg, restaurantImg, schoolImg1, schoolImg2, stationaryImg;
var toyShopImg;
var game1Button, game2Button;
var gameState= "start";
var form, building;
var closeButton;
var medical, fruitGSound, plant;
var obs1, obs2, obs3, obs4, square, c1,c2,c3;

function preload(){

    bgImg= loadImage("bg.jpg");

    //loading running game items
    playerAnimation= loadAnimation("animations/girl1.png", "animations/girl2.png","animations/girl3.png","animations/girl4.png","animations/girl5.png",
    "animations/girl6.png","animations/girl7.png","animations/girl8.png");

    birdAnimation= loadAnimation("animations/bird1.png","animations/bird2.png","animations/bird3.png","animations/bird4.png","animations/bird5.png",
    "animations/bird6.png","animations/bird7.png","animations/bird8.png","animations/bird9.png","animations/bird10.png","animations/bird11.png","animations/bird12.png",
    "animations/bird13.png","animations/bird14.png")

    coinImg= loadImage("coin.png");
    carImg= loadImage("car.png");
    runningCoinSound= loadSound("Sounds/game1CoinSound.wav");
    runningGOver= loadSound('Sounds/game1Over.wav');

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
    fruitGOver= loadSound("Sounds/game2Over.wav");
    fruitCollectingSound= loadSound("Sounds/game2FruitSound.wav");

    //loding hardest game items
    game3bg= loadImage("game3bg.jpg");

    //loading shooting game items
    bowImg= loadImage("bow0.png");
    arrowImg= loadImage("arrow0.png");
    bg4Img= loadImage("background0.png");

     //loading building sector items
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

    //loading medical shop items
    cream= loadImage("medicalShop/antiseptic cream.png");
    bandage= loadImage("medicalShop/bandage.png");
    crepeBandage= loadImage("medicalShop/crepeBandage.png");
    syringe= loadImage("medicalShop/syringe.png");
    syrupMed= loadImage("medicalShop/syrupMed.png");
    tabletMed= loadImage("medicalShop/tabletMed.png");

    // loading plants setup sector items
    solarPlant= loadImage("plantSetup/solarPlant.png");
    electricPlant= loadImage("plantSetup/electricPlant.png");
    waterPlant= loadImage("plantSetup/waterPlant.png");
}

function setup(){

  createCanvas(1366,657);

  //creating running game background, sprites and groups
  runningGameBg= createSprite(600,300,1200,800);
  runningGameBg.addImage(bgImg);
  runningGameBg.scale= 3;
  runningGameBg.velocityX= -5;
  runningGameBg.x= runningGameBg.width/2;
  runningGameBg.visible = false;
  
  player= createSprite(100,450);
  player.addAnimation("running",playerAnimation);
  player.scale= 0.50;
  player.visible = false;

  coinGroup= new Group();
  birdGroup= new Group();

  //creating fruit game background, sprites and groups
  bg2= createSprite(600,300,1200, 800);
  bg2.addImage(bg2Img);
  bg2.scale= 1.5;
  bg2.visible = false;

  basket= createSprite(400,500);
  basket.addImage(basketImg);
  basket.scale= 0.80;
  basket.visible = false;

  fruitGroup= new Group();
  bombGroup= new Group();

  //creating hardest game background, sprites and groups
  bg3= createSprite(600,300,1200, 800);
  bg3.addImage(game3bg);
  bg3.scale= 6;
  bg3.visible = false;

  wall3 = createSprite(372,192,5,90);
  wall3.visible = false;
  wall3.shapeColor= "white";
  wall4 = createSprite(378,408,5,90);
  wall4.visible = false;
  wall4.shapeColor= "white";
  wall5 = createSprite(1025,300,5,300);
  wall5.visible = false;
  wall5.shapeColor= "white";
  wall7 = createSprite(330,240,90,5);
  wall7.visible = false;
  wall7.shapeColor= "white";
  wall8 = createSprite(335,360,90,5);
  wall8.visible = false;
  wall8.shapeColor= "white";
  wall9 = createSprite(285,300,5,120);
  wall9.visible = false;
  wall9.shapeColor= "white";

  c1 = createSprite(500,300,5,120);
  c1.visible = false;
  c1.shapeColor= "white";

  c2 = createSprite(700,300,5,120);
  c2.visible = false;
  c2.shapeColor= "white";

  c3 = createSprite(900,400,5,120);
  c3.visible = false;
  c3.shapeColor= "white";

  square = createSprite(350,300,13,13);
  square.shapeColor = "yellow";
  square.visible = false;

  obs1 = createSprite(400,198,20,20);
  obs1.shapeColor = "red";
  obs1.visible = false;
  
  obs2 = createSprite(600,400,20,20);
  obs2.shapeColor = "red";
  obs2.visible = false;

  obs3 = createSprite(800,198,20,20);
  obs3.shapeColor = "red";
  obs3.visible = false;

  obs4 = createSprite(1000,405,20,20);
  obs4.shapeColor = "red";
  obs4.visible = false;

  wall1 = createSprite(700,150,650,5);
  wall1.visible = false;
  wall1.shapeColor= "white";
  wall2 = createSprite(700,450,650,5);
  wall2.visible = false;
  wall2.shapeColor= "white";

  obs1.velocityY = 9;
  obs2.velocityY= 9;
  obs3.velocityY = -9;
  obs4.velocityY = -9;
  c1.velocityY= 8;
  c2.velocityY = -8;
  c3.velocityY = -8;

  coins3= new Group();

  //creating shooting game background, sprites and groups
  bg4= createSprite(600,300,1200, 800);
  bg4.addImage(bg4Img);
  bg4.scale= 5;
  bg4.visible = false;

  invs= createSprite(1360,600,5,1200);
  invs.visible= false;

  bow = createSprite(1000,405,20,20);
  bow.addImage(bowImg);
  bow.visible = false;

  appleGrp= new Group();
  arrowGrp= new Group();
  bGrp= new Group();

  form= new Form();
  edges= createEdgeSprites();
}

function draw(){

  background(menuBgImg);

  //fruit game items bounceOff code
  obs1.bounceOff(wall1);
  obs1.bounceOff(wall2);
  obs2.bounceOff(wall1);
  obs2.bounceOff(wall2);
  obs3.bounceOff(wall1);
  obs3.bounceOff(wall2);
  obs4.bounceOff(wall1);
  obs4.bounceOff(wall2);
  c1.bounceOff(wall1);
  c1.bounceOff(wall2);
  c2.bounceOff(wall1);
  c2.bounceOff(wall2);
  c3.bounceOff(wall1);
  c3.bounceOff(wall2);


  //state conditions
  if(gameState==="start"){
    form.display();
  }

  if(gameState === "runningGame"){
    clear();
    runningGame();
  }

  if(gameState === "fruitGame"){
    clear();
    fruitGame();
  }
  
  if(gameState === "hardestGame"){
    clear();
    hardestGame();
  }

  if(gameState === "shootingGame"){
    clear();
    shootingGame();
  }
  
  drawSprites();

  //text for money and food
  stroke("Yellow");
  fill("Yellow");
  textSize(30);
  text("Money : "+score,1100,40);
  text("Food  : "+food, 100,40);
}

//SHOOTING GAME
function shootingGame(){
  
  bg4.visible= true;
  bow.visible= true;
  bow.collide(edges);

  if (keyDown("space")) {
    createArrow();
  }
  if(keyIsDown(UP_ARROW)){
    bow.y= bow.y-10;
  }
  if(keyIsDown(DOWN_ARROW)){
    bow.y= bow.y+10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    bow.x= bow.x+10;
  }
  if(keyIsDown(LEFT_ARROW)){
    bow.x= bow.y-10;
  }

  for(var i=0; i<appleGrp.length; i++){
    if(appleGrp.get(i).isTouching(arrowGrp)){
      appleGrp.get(i).destroy();
      food = food + 1;
      fruitCollectingSound.play();
    }
  }

  if(appleGrp.isTouching(bow) || bow.isTouching(bGrp)){
    clear();
    appleGrp.destroyEach();
    arrowGrp.destroyEach();
    bGrp.destroyEach();
    bow.visible = false;
    bg4.visible= false;
    fruitGOver.play();
    alert("Sorry, You Lost. Better Luck Next Time");
    gameState = "start";
  }

  if(appleGrp.isTouching(invs)){
    clear();
    appleGrp.destroyEach();
    arrowGrp.destroyEach();
    bGrp.destroyEach();
    bow.visible = false;
    bg4.visible= false;
    fruitGOver.play();
    alert("Oh Looks Like You Missed An Apple. Its Ok Try Again.");
    gameState = "start";
  }
  bombs();
  apples();
}


//FRUIT GAME
function fruitGame(){

    bg2.visible = true;
    basket.visible = true;
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
        food = food + 5;
        fruitCollectingSound.play();
      }
    }

    if(bombGroup.isTouching(basket)){
      clear();
      bombGroup.destroyEach();
      fruitGroup.destroyEach();
      basket.visible = false;
      bg2.visible = false;
      fruitGOver.play();
      alert("Sorry, You Lost. Better Luck Next Time");
      gameState = "start";
    }
   
    spawnFruits();
    spawnBombs();
}


//HARDEST GAME
function hardestGame(){

  bg3.visible = true;
  wall3.visible = true;
  wall4.visible = true;
  wall5.visible = true;
  wall7.visible = true;
  wall8.visible = true;
  wall9.visible = true;
  obs1.visible = true;
  obs2.visible = true;
  obs3.visible = true;
  obs4.visible = true;
  wall1.visible = true;
  wall2.visible = true;
  square.visible= true;
  c1.visible= true;
  c2.visible= true;
  c3.visible= true;

  square.collide(wall1);
  square.collide(wall2);
  square.collide(wall3);
  square.collide(wall4);
  square.collide(wall5);
  square.collide(wall7);
  square.collide(wall8);
  square.collide(wall9);
  
  if(keyDown(RIGHT_ARROW)){
    square.x = square.x + 4;
  }
  if(keyDown(LEFT_ARROW)){
    square.x = square.x - 4;
  }
  if(keyDown(DOWN_ARROW)){
    square.y = square.y + 4;
  }
  if(keyDown(UP_ARROW)){
    square.y = square.y - 4;
  }

  for(var i=0; i<coins3.length; i++){
    if(coins3.get(i).isTouching(square)){
      coins3.get(i).destroy();
      score = score + 10;
      runningCoinSound.play();
    }
  }

  if(square.isTouching(obs1)||
      square.isTouching(obs2)||
      square.isTouching(obs3)||
      square.isTouching(obs4)||
      square.isTouching(c1)||
      square.isTouching(c2)||
      square.isTouching(c3))
  {
     square.x = 300;
     square.y = 300;
     count = count + 1;
  }

  coins();

  if(count===5){
    clear();
    count= 0;
    bg3.visible = false;
    square.visible = false;
    obs1.visible = false;
    obs2.visible = false;
    obs3.visible = false;
    obs4.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible= false;
    c1.visible= false;
    c2.visible= false;
    c3.visible= false;
    coins3.destroyEach();
    runningGOver.play();
    alert("Oops! You Exceeded The Death Limit. You Lost!");
    gameState= "start";
  }
  }
  

//RUNNING GAME
function runningGame(){

      runningGameBg.visible = true;
      player.visible = true;
      player.collide(edges);
      
      if(runningGameBg.x<0){
        runningGameBg.x= runningGameBg.width/2
      }
      
      if(keyIsDown(UP_ARROW)){
        player.y= player.y-10;
      }
      if(keyIsDown(DOWN_ARROW)){
        player.y= player.y+10;
      }

      for(var i=0; i< coinGroup.length; i++){
        if(coinGroup.get(i).isTouching(player)){
            coinGroup.get(i).destroy();
            score = score + 5;
            runningCoinSound.play();
        }
      }
      spawnCoins();
      spawnBirds();

      if(birdGroup.isTouching(player)){
        clear();
        money = score;
        coinGroup.destroyEach();
        birdGroup.destroyEach();
        player.visible = false;
        runningGameBg.visible = false;
        runningGOver.play();
        alert("Sorry, You Lost. Better Luck Next Time");
        gameState = "start";
      }

     
}

//functions
function spawnCoins(){
  
    if(frameCount%30===0){
      
      coin= createSprite(1500,10);
      coin.y= Math.round(random(500,5));
      coin.velocityX= -10;
      coin.addImage(coinImg);
      coin.scale= 0.09;
      coin.lifetime= 500;
      coinGroup.add(coin);
     }
  }
  
  function spawnBirds(){
    if(frameCount%20===0){
      bird= createSprite(1500,10);
      bird.y= Math.round(random(700,10));
      bird.velocityX= -7;
      bird.scale= 0.50;
      bird.addAnimation("flying",birdAnimation);
      bird.lifetime= 500;
      birdGroup.add(bird);
    }
  }

function spawnFruits(){
  if(frameCount%10===0){
    fruit= createSprite(10,10);
    fruit.x= Math.round(random(70,1300));
    fruit.velocityY= 9
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
  if(frameCount%20===0){
    bomb= createSprite(10,10);
    bomb.addImage(bombImg);
    bomb.scale= 0.120;
    bomb.x= Math.round(random(70,1300));
    bomb.velocityY=10;
    bomb.lifetime= 400;
    bombGroup.add(bomb);
  }
}

function coins(){
  if(frameCount%60===0){
    coin3= createSprite(300,400);
    coin3.addImage(coinImg);
    coin3.scale= 0.09;
    coin3.x= Math.round(random(1020,400));
    coin3.y= Math.round(random(400,200));
    coin3.lifetime= 200;
    coins3.add(coin3);
  }
}

function apples(){
  if(frameCount%30===0){
      apple= createSprite(100,450);
      apple.y= Math.round(random(500,5));
      apple.velocityX= 4;
      apple.addImage(appleImg);
      apple.lifetime= 500;
      appleGrp.add(apple);
  }
}

function createArrow() {
  var arrow= createSprite(1000, 405, 60, 10);
  arrow.addImage(arrowImg);
  arrow.y=bow.y;
  arrow.x= bow.x;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGrp.add(arrow);   
}

function bombs(){
  if(frameCount%50===0){
    b= createSprite(10,10);
    b.addImage(bombImg);
    b.scale= 0.120;
    b.x= Math.round(random(70,1300));
    b.velocityY=3;
    b.lifetime= 400;
    bGrp.add(b);
  }
}