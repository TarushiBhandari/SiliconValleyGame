class Form{
    constructor(){

        this.citySetup= createSprite(120,400);
        this.medicalShop= createSprite(370,400);
        this.plantSetup= createSprite(620,400);
        this.game1Button= createButton('RUN AND EARN');
        this.game2Button= createButton('COLLECT AND EARN');
    }

    display(){

        this.citySetup.addImage(shopImg);
        this.citySetup.scale= 0.2;

        this.medicalShop.addImage(shopImg);
        this.medicalShop.scale= 0.2;

        this.plantSetup.addImage(shopImg);
        this.plantSetup.scale= 0.2;

        this.game1Button.position(1100,400); 
        this.game1Button.style('width', '170px');
        this.game1Button.style('height', '40px');
        this.game1Button.style('background', 'lightpink');

        this.game2Button.position(1100,500); 
        this.game2Button.style('width', '170px');
        this.game2Button.style('height', '40px');
        this.game2Button.style('background', 'lightpink');

        if(mousePressedOver(this.citySetup)){
            console.log("clicked");
            gameState= "citySupplies";
            building= new Building();
            building.display();
        }

        if(mousePressedOver(this.medicalShop)){
            gameState= "medical";
            medical= new Medical();
            medical.display();
        }
        
    }

    hide(){
        this.citySetup.destroy();
        this.medicalShop.visible= false;
        this.plantSetup.visible= false;
        this.game1Button.hide();
        this.game2Button.hide();
    }
}
