class Form{
    constructor(){

        this.citySetup= createSprite(120,400);
        this.citySetup.addImage(shopImg);
        this.citySetup.scale= 0.2;
        this.citySetup.visible = false;

        this.medicalShop= createSprite(370,400);
        this.medicalShop.addImage(shopImg);
        this.medicalShop.scale= 0.2;
        this.medicalShop.visible = false;

        this.plantSetup= createSprite(620,400);
        this.plantSetup.addImage(shopImg);
        this.plantSetup.scale= 0.2;
        this.plantSetup.visible = false;

        this.game1Button= createButton('RUN AND EARN');
        this.game2Button= createButton('COLLECT AND EARN');
    }

    display(){

        this.displayHeadings();
        
        this.citySetup.visible = true;
        this.medicalShop.visible = true;
        this.plantSetup.visible = true;

        this.game1Button.position(1100,400); 
        this.game1Button.style('width', '170px');
        this.game1Button.style('height', '40px');
        this.game1Button.style('background', 'lightpink');
        this.game1Button.show();

        this.game2Button.position(1100,500); 
        this.game2Button.style('width', '170px');
        this.game2Button.style('height', '40px');
        this.game2Button.style('background', 'lightpink');
        this.game2Button.show();

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
        })
        
    }

    hide(){
        this.citySetup.visible = false;
        this.medicalShop.visible= false;
        this.plantSetup.visible= false;
        this.game1Button.hide();
        this.game2Button.hide();

    }

    displayHeadings(){

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
        text("CITY BUILDINGS BUILT: "+buildings,40,200);
      
        textSize(30);
        fill("yellow");
        stroke(5);
        text("CITY BUILDINGS LEFT: "+buildingsLeft, 450,200);
    }
}
