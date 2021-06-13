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

        this.game1Button= createButton('INFINITE RUNNER');
        this.game2Button= createButton('FRUIT COLLECTOR');
        this.game3Button= createButton('HARDEST GAME');
        alert("Don't go back otherwise your money and food will be lost!");
    }

    display(){
        

        this.displayHeadings();
        
        this.citySetup.visible = true;
        this.medicalShop.visible = true;

        this.game1Button.position(1100,400); 
        this.game1Button.style('width', '180px');
        this.game1Button.style('height', '50px');
        this.game1Button.style('background', 'lightpink');
        this.game1Button.show();

        this.game2Button.position(1100,500); 
        this.game2Button.style('width', '180px');
        this.game2Button.style('height', '50px');
        this.game2Button.style('background', 'lightpink');
        this.game2Button.show();

        this.game3Button.position(850,450); 
        this.game3Button.style('width', '180px');
        this.game3Button.style('height', '50px');
        this.game3Button.style('background', 'lightpink');
        this.game3Button.show();

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

        this.game1Button.mousePressed(()=>{
            this.hide();
            gameState = "runningGame";
        });

        this.game2Button.mousePressed(()=>{
            this.hide();
            gameState = "fruitGame";
        });

        this.game3Button.mousePressed(()=>{
            this.hide();
            gameState = "hardestGame";
        });
        
    }

    hide(){
        this.citySetup.visible = false;
        this.medicalShop.visible= false;
        this.game1Button.hide();
        this.game2Button.hide();
        this.game3Button.hide();

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

        textSize(40);
        fill("black");
        stroke(8);
        text("BUY YOUR SUPPLIES HERE!", 50,500);

        textSize(30);
        fill("magenta");
        stroke(8);
        text("Play These Games To", 900, 300);
        text("Earn Money And Food", 900, 330);
    }
}
