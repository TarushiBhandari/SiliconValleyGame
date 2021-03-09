class Building{
    constructor(){
        this.buildings= [shopImg,bankImg, collegeImg1, collegeImg2, groceryImg, hospitalImg1, hospitalImg2,
             houseImg1, houseImg2, houseImg3, mallImg, officeImg1, officeImg2,parkImg1,
            parkImg2, pharmacyImg, restaurantImg, schoolImg1, schoolImg2, stationaryImg,
            toyShopImg];
        this.x= 100;
        this.y= 100;
        this.closeImg= loadImage("close.png");
        this.closeButton= createSprite(1300,50,10,10);
        this.closeButton.addImage(this.closeImg);
        this.closeButton.scale= 0.1;
    }

    display(){

        for(var i=0; i<20; i++){
            
            var building= createSprite(this.x,this.y,20,20);
            //building.addImage(this.buildings[i]);
            this.x+= 280;
            console.log(i);
            
            if(i===4){
                this.y= 250;
                this.x= 100;
            }
            if(i===9){
                this.y= 400;
                this.x= 100;
            }
            if(i===14){
                this.y= 550;
                this.x= 100;
            }
            switch(i){
                case 0: building.addImage(toyShopImg);
                building.scale= 0.5;
                break;
                case 1: building.addImage(bankImg);
                building.scale= 0.3;
                break;
                case 2: building.addImage(collegeImg1);
                building.scale= 0.07;
                break;
                case 3: building.addImage(collegeImg2);
                building.scale= 0.2;
                break;
                case 4: building.addImage(groceryImg);
                building.scale= 0.3;
                break;
                case 5: building.addImage(hospitalImg1);
                building.scale= 0.3;
                break;
                case 6: building.addImage(hospitalImg2);
                building.scale= 0.2;
                break;
                case 7: building.addImage(houseImg1);
                building.scale= 0.07;
                break;
                case 8: building.addImage(houseImg2);
                building.scale= 0.3;
                break;
                case 9: building.addImage(houseImg3);
                building.scale= 0.2;
                break;
                case 10: building.addImage(mallImg);
                building.scale= 0.3;
                break;
                case 11: building.addImage(officeImg1);
                building.scale= 0.13;
                break;
                case 12: building.addImage(officeImg2);
                building.scale= 0.2;
                break;
                case 13: building.addImage(parkImg1);
                building.scale= 0.4;
                break;
                case 14: building.addImage(parkImg2);
                building.scale= 0.4;
                break;
                case 15: building.addImage(pharmacyImg);
                building.scale= 0.3;
                break;
                case 16: building.addImage(restaurantImg);
                building.scale= 0.3;
                break;
                case 17: building.addImage(schoolImg1);
                building.scale= 0.3;
                break;
                case 18: building.addImage(schoolImg2);
                building.scale= 0.3;
                break;
                case 19: building.addImage(stationaryImg);
                building.scale= 0.5;
                break;
                default: break;

            }
        }
    }
}    
