class Building{
    constructor(){
        this.buildings= [shopImg,bankImg, collegeImg1, collegeImg2, groceryImg, hospitalImg1, hospitalImg2,
             houseImg1, houseImg2, houseImg3, mallImg, officeImg1, officeImg2,parkImg1,
            parkImg2, pharmacyImg, restaurantImg, schoolImg1, schoolImg2, stationaryImg,
            toyShopImg];
        this.x= 100;
        this.y= 100;
        this.building = [];

        this.toys= createButton('1000 INR Food-100 units');
        this.bank= createButton('2000 INR Food-200 units');
        this.college1= createButton('4000 INR Food-350 units');
        this.college2= createButton('5000 INR Food-450 units');
        this.grocery= createButton('3000 INR Food-600 units');
        this.h1= createButton('6000 INR Food-750 units');
        this.h2= createButton('6500 INR Food-850 units');
        this.house1= createButton('1500 INR Food-500 units');
        this.house2= createButton('1600 INR Food-600 units');
        this.house3= createButton('4000 INR Food-800 units');
        this.mall= createButton('6000 INR Food-760 units');
        this.office1= createButton('5900 INR Food-600 units');
        this.office2= createButton('6700 INR Food-780 units');
        this.park1= createButton('3000 INR Food-700 units');
        this.park2= createButton('6000 INR Food-900 units');
        this.pharmacy= createButton('7000 INR Food-700 units');
        this.restaurant= createButton('4000 INR Food-800 units');
        this.s1= createButton('5500 INR Food-670 units');
        this.s2= createButton('6800 INR Fodd-690 units');
        this.stationary= createButton('5000 INR Food-500 units');

        this.cancelButton= createButton('Go Back');
    }

    hideAll(){
        for(var i=0; i< 20 ; i++){
            this.building[i].destroy();   
        }
        this.toys.hide();
        this.bank.hide();
        this.college1.hide();
        this.college2.hide();
        this.grocery.hide();
        this.h1.hide();
        this.h2.hide();
        this.house1.hide();
        this.house2.hide();
        this.house3.hide();
        this.mall.hide();
        this.office1.hide();
        this.office2.hide();
        this.park1.hide();
        this.park2.hide();
        this.pharmacy.hide();
        this.restaurant.hide();
        this.s1.hide();
        this.s2.hide();
        this.stationary.hide();
        this.cancelButton.hide();
        gameState= "start";
    }

    display(){
        this.cancelButton.position(1270,30); 
        this.cancelButton.style('width', '50px');
        this.cancelButton.style('height', '40px');
        this.cancelButton.style('background', 'red');
        this.cancelButton.show();
        this.cancelButton.mousePressed(()=>{
            this.hideAll();
        });

        this.toys.position(50,120); 
        this.toys.style('width', '100px');
        this.toys.style('height', '65px');
        this.toys.style('background', 'deepPink');
        this.toys.show();
        this.toys.mousePressed(()=>{
            if(score >= 10 && food >= 10){
                score = score - 10;
                food= food-10
                alert("Congrats ! you bought a toy shop for your city with money!!! \n Money Left: "+score +"\n Food Left: "+score);
            }else{
                alert("You Dont Have Sufficient Money/Food To Buy This");
            }
        });

        this.bank.position(330,120); 
        this.bank.style('width', '100px');
        this.bank.style('height', '65px');
        this.bank.style('background', 'deepPink');
        this.bank.show();
        this.bank.mousePressed(()=>{
            if(score >= 2000 && food >= 200){
                score = score - 2000;
                food = food-200;
                alert("Congrats ! you bought a bank for your city !!!");
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.college1.position(610,120); 
        this.college1.style('width', '100px');
        this.college1.style('height', '65px');
        this.college1.style('background', 'deepPink');
        this.college1.show();
        this.college1.mousePressed(()=>{
            if(score >= 4000 && food>=350){
                score = score - 4000;
                food = food-350;
                alert("Congrats ! you bought a college building for your city !!!");
               
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.college2.position(890,120); 
        this.college2.style('width', '100px');
        this.college2.style('height', '65px');
        this.college2.style('background', 'deepPink');
        this.college2.show();
        this.college2.mousePressed(()=>{
            if(score >= 5000 && food>=450){
                score = score - 5000;
                food = food-450;
                alert("Congrats ! you bought a college building for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.grocery.position(1170,120); 
        this.grocery.style('width', '100px');
        this.grocery.style('height', '65px');
        this.grocery.style('background', 'deepPink');
        this.grocery.show();
        this.grocery.mousePressed(()=>{
            if(score >= 3000 && food>=600){
                score = score - 3000;
                food = food-600;
                alert("Congrats ! you bought a grocery store for your city !!!");
               
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.h1.position(50,240); 
        this.h1.style('width', '100px');
        this.h1.style('height', '65px');
        this.h1.style('background', 'deepPink');
        this.h1.show();
        this.h1.mousePressed(()=>{
            if(score >= 6000 && food >= 750){
                score = score - 6000;
                food = food-750;
                alert("Congrats ! you bought a hospital for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.h2.position(330,240); 
        this.h2.style('width', '100px');
        this.h2.style('height', '65px');
        this.h2.style('background', 'deepPink');
        this.h2.show();
        this.h2.mousePressed(()=>{
            if(score >= 6500 && food>=850){
                score = score - 6500;
                food = food-850;
                alert("Congrats ! you bought a hospital for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.house1.position(610,240); 
        this.house1.style('width', '100px');
        this.house1.style('height', '65px');
        this.house1.style('background', 'deepPink');
        this.house1.show();
        this.house1.mousePressed(()=>{
            if(score >= 1500 && food>=500){
                score = score - 1500;
                food = food-500;
                alert("Congrats ! you bought a house for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.house2.position(890,240); 
        this.house2.style('width', '100px');
        this.house2.style('height', '65px');
        this.house2.style('background', 'deepPink');
        this.house2.show();
        this.house2.mousePressed(()=>{
            if(score >= 1600 && food>=600){
                score = score - 1600;
                food = food-600;
                alert("Congrats ! you bought a house for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.house3.position(1170,240); 
        this.house3.style('width', '100px');
        this.house3.style('height', '65px');
        this.house3.style('background', 'deepPink');
        this.house3.show();
        this.house3.mousePressed(()=>{
            if(score >= 4000 && food>=800){
                score = score - 4000;
                food = food-800;
                alert("Congrats ! you bought a house for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.mall.position(50,380); 
        this.mall.style('width', '100px');
        this.mall.style('height', '65px');
        this.mall.style('background', 'deepPink');
        this.mall.show();
        this.mall.mousePressed(()=>{
            if(score >= 6000 && food>=760){
                score = score - 6000;
                food = food-760;
                alert("Congrats ! you bought a mall for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.office1.position(330,380); 
        this.office1.style('width', '100px');
        this.office1.style('height', '65px');
        this.office1.style('background', 'deepPink');
        this.office1.show();
        this.office1.mousePressed(()=>{
            if(score >= 5900 && food>=600){
                score = score - 5900;
                food = food-600;
                alert("Congrats ! you bought an office building for your city !!!");
               
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.office2.position(610,380); 
        this.office2.style('width', '100px');
        this.office2.style('height', '65px');
        this.office2.style('background', 'deepPink');
        this.office2.show();
        this.office2.mousePressed(()=>{
            if(score >= 6700 && food>=780){
                alert("Congrats You Bought An Office Building For Your City!!!")
            }
            else{
                score = score - 6700;
                food = food-780;
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.park1.position(890,380); 
        this.park1.style('width', '100px');
        this.park1.style('height', '65px');
        this.park1.style('background', 'deepPink');
        this.park1.show();
        this.park1.mousePressed(()=>{
            if(score >= 3000 && food>=700){
                score = score - 3000;
                food = food-700;
                alert("Congrats ! you bought a park for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.park2.position(1170,380); 
        this.park2.style('width', '100px');
        this.park2.style('height', '65px');
        this.park2.style('background', 'deepPink');
        this.park2.show();
        this.park2.mousePressed(()=>{
            if(score >= 6000 && food>=900){
                score = score - 6000;
                food = food-900;
                alert("Congrats ! you bought a park for your city !!!");
                
            }
            else{
                alert("You Dont Have Sufficient Money/Food To Buy This");            }
        });

        this.pharmacy.position(50,540); 
        this.pharmacy.style('width', '100px');
        this.pharmacy.style('height', '65px');
        this.pharmacy.style('background', 'deepPink');
        this.pharmacy.show();
        this.pharmacy.mousePressed(()=>{
            if(score >= 7000 && food>=700){
                score = score - 7000;
                food = food-700;
                alert("Congrats ! you bought a pharmacy for your city !!!");
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.restaurant.position(330,540); 
        this.restaurant.style('width', '100px');
        this.restaurant.style('height', '65px');
        this.restaurant.style('background', 'deepPink');
        this.restaurant.show();
        this.restaurant.mousePressed(()=>{
            if(score >= 4000 && food>=800){
                score = score - 4000;
                food = food-800;
                alert("Congrats ! you bought a restaurant for your city !!!");
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.s1.position(610,540); 
        this.s1.style('width', '100px');
        this.s1.style('height', '65px');
        this.s1.style('background', 'deepPink');
        this.s1.show();
        this.s1.mousePressed(()=>{
            if(score >= 5500 && food>=670){
                score = score - 5500;
                food = food-670;
                alert("Congrats ! you bought a school building for your city !!!");
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.s2.position(890,540); 
        this.s2.style('width', '100px');
        this.s2.style('height', '65px');
        this.s2.style('background', 'deepPink');
        this.s2.show();
        this.s2.mousePressed(()=>{
            if(score >= 6800 && food>=690){
                score = score - 6800;
                food = food-690;
                alert("Congrats ! you bought a school building for your city !!!");
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.stationary.position(1170,540); 
        this.stationary.style('width', '100px');
        this.stationary.style('height', '65px');
        this.stationary.style('background', 'deepPink');
        this.stationary.show();
        this.stationary.mousePressed(()=>{
            if(score >= 5000 && food>=500){
                score = score - 5000;
                food = food-500;
                alert("Congrats ! you bought a stationary shop for your city !!!");
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        for(var i=0; i<20; i++){
            
            this.building[i]= createSprite(this.x,this.y,20,20);
            this.x+= 280;
            
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
                case 0: this.building[i].addImage(toyShopImg);
                this.building[i].scale= 0.5;
                break;
                case 1: this.building[i].addImage(bankImg);
                this.building[i].scale= 0.3;
                break;
                case 2: this.building[i].addImage(collegeImg1);
                this.building[i].scale= 0.07;
                break;
                case 3: this.building[i].addImage(collegeImg2);
                this.building[i].scale= 0.3;
                break;
                case 4: this.building[i].addImage(groceryImg);
                this.building[i].scale= 0.3;
                break;
                case 5: this.building[i].addImage(hospitalImg1);
                this.building[i].scale= 0.3;
                break;
                case 6: this.building[i].addImage(hospitalImg2);
                this.building[i].scale= 0.2;
                break;
                case 7: this.building[i].addImage(houseImg1);
                this.building[i].scale= 0.07;
                break;
                case 8: this.building[i].addImage(houseImg2);
                this.building[i].scale= 0.3;
                break;
                case 9: this.building[i].addImage(houseImg3);
                this.building[i].scale= 0.2;
                break;
                case 10: this.building[i].addImage(mallImg);
                this.building[i].scale= 0.3;
                break;
                case 11: this.building[i].addImage(officeImg1);
                this.building[i].scale= 0.13;
                break;
                case 12: this.building[i].addImage(officeImg2);
                this.building[i].scale= 0.2;
                break;
                case 13: this.building[i].addImage(parkImg1);
                this.building[i].scale= 0.4;
                break;
                case 14: this.building[i].addImage(parkImg2);
                this.building[i].scale= 0.4;
                break;
                case 15: this.building[i].addImage(pharmacyImg);
                this.building[i].scale= 0.3;
                break;
                case 16: this.building[i].addImage(restaurantImg);
                this.building[i].scale= 0.4;
                break;
                case 17: this.building[i].addImage(schoolImg1);
                this.building[i].scale= 0.3;
                break;
                case 18: this.building[i].addImage(schoolImg2);
                this.building[i].scale= 0.3;
                break;
                case 19: this.building[i].addImage(stationaryImg);
                this.building[i].scale= 0.6;
                break;
                default: break;

            }
    }
    }
}
