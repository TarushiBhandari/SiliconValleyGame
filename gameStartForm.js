class Form{
    constructor(){

        this.citySetup= createSprite(120,300);
        this.citySetup.addImage(shopImg);
        this.citySetup.scale= 0.2;
        this.citySetup.visible = false;

        this.medicalShop= createSprite(370,300);
        this.medicalShop.addImage(shopImg);
        this.medicalShop.scale= 0.2;
        this.medicalShop.visible = false;

        this.plantSetup= createSprite(620,300);
        this.plantSetup.addImage(shopImg);
        this.plantSetup.scale= 0.2;
        this.plantSetup.visible = false;

        this.game1Button= createButton('INFINITE RUNNER');
        this.game2Button= createButton('FRUIT COLLECTOR');
        this.game3Button= createButton('HARDEST GAME');
        this.game4Button= createButton('SHOOT THE APPLES');
        alert("Don't reload the page otherwise your money and food will be lost!");
    }

    display(){
        

        this.displayHeadings();
        
        this.citySetup.visible = true;
        this.medicalShop.visible = true;
        this.plantSetup.visible= true;

        this.game1Button.position(1000,400); 
        this.game1Button.style('width', '180px');
        this.game1Button.style('height', '50px');
        this.game1Button.style('background', 'lightpink');
        this.game1Button.show();

        this.game2Button.position(1000,450); 
        this.game2Button.style('width', '180px');
        this.game2Button.style('height', '50px');
        this.game2Button.style('background', 'lightpink');
        this.game2Button.show();

        this.game3Button.position(1000,500); 
        this.game3Button.style('width', '180px');
        this.game3Button.style('height', '50px');
        this.game3Button.style('background', 'lightpink');
        this.game3Button.show();

        this.game4Button.position(1000,550); 
        this.game4Button.style('width', '180px');
        this.game4Button.style('height', '50px');
        this.game4Button.style('background', 'lightpink');
        this.game4Button.show();

        if(mousePressedOver(this.citySetup)){
            this.hide();
            console.log("clicked");
            gameState= "citySupplies";
            building= new Building();
            building.display();
        }

        if(mousePressedOver(this.medicalShop)){
            this.hide();
            gameState= "medical";
            medical= new Medical();
            medical.display();
        }

        if(mousePressedOver(this.plantSetup)){
            this.hide();
            gameState= "plantSetup";
            plant= new Plants();
            plant.display();
        }

        this.game1Button.mousePressed(()=>{
            this.hide();
            alert("This Is An Infinite Runner Game. Collect The Coins And Avoid The Birds. All The Best!");
            gameState = "runningGame";
        });

        this.game2Button.mousePressed(()=>{
            this.hide();
            alert("Use Arrow Keys To Move Basket. Avoid the Bombs And Collect The Fruits. All The Best!");
            gameState = "fruitGame";
        });

        this.game3Button.mousePressed(()=>{
            this.hide();
            alert("This Is An Infinite Game. Collect As Many Coins As You Can. Use Arrow Keys To Move Your Player. You Will Lose After 5 Deaths. All The Best!");
            gameState = "hardestGame";
        });

        this.game4Button.mousePressed(()=>{
            this.hide();
            alert("Press space bar to shoot. Dont miss any apple or you will lose!Dont Let The Arrows Touch The Bombs. Also Dont Let The Bow Touch The Apples.Avoid The Bombs. All The Best!");
            gameState = "shootingGame";
        });
        
    }

    hide(){
        this.citySetup.visible = false;
        this.medicalShop.visible= false;
        this.plantSetup.visible= false;
        this.game1Button.hide();
        this.game2Button.hide();
        this.game3Button.hide();
        this.game4Button.hide();
    }

    displayHeadings(){

        textSize(90);
        fill("black");
        stroke(7);
        text("MENU", 550, 80);
      
        textSize(20);
        fill("black");
        stroke(8);
        text("CITY SUPPLIES",50,400);
      
        textSize(20);
        fill("black");
        stroke(8);
        text("MEDICAL SHOP", 300,400);

        textSize(20);
        fill("black");
        stroke(8);
        text("PLANT SETUP SUPPLIES", 550,400);

        textSize(40);
        fill("black");
        stroke(8);
        text("BUY YOUR SUPPLIES HERE!", 50,500);

        textSize(30);
        fill("magenta");
        stroke(8);
        text("Play These Games To", 960, 300);
        text("Earn Money And Food", 960, 330);
    }
}
