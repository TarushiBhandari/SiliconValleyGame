class Plants{
    constructor(){
        this.x= 200;
        this.y= 300;
        this.money= score;
        this.allPlants=[];
    
        this.ep= createButton('30000 INR Food-20000 units');
        this.sp= createButton('25000 INR Food-15000 units');
        this.wp= createButton('15000 INR Food-20000 units');

        this.cancelButton= createButton('Go Back');
    }

    hideAll(){
        for(var i=0; i<3; i++){
            this.allPlants[i].destroy();
            this.ep.hide();
            this.sp.hide();
            this.cancelButton.hide();
            this.wp.hide();
        }
        gameState = "start";
    }

    display(){

        this.cancelButton.position(1270,30); 
        this.cancelButton.style('width', '50px');
        this.cancelButton.style('height', '40px');
        this.cancelButton.style('background', 'red');
        this.cancelButton.show();
        this.cancelButton.mousePressed(()=>{
            this.hideAll();
        })

        this.ep.position(130,430); 
        this.ep.style('width', '100px');
        this.ep.style('height', '60px');
        this.ep.style('background', 'yellow');
        this.ep.show();
        this.ep.mousePressed(()=>{
            if(score >= 30000 && food>=20000){
                score = score - 30000;
                food = food-20000;
                alert("Congrats ! you bought an electric plant for your city !!! \n Money Left: "+score+"\n Food Left: "+food);
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.sp.position(580,430); 
        this.sp.style('width', '100px');
        this.sp.style('height', '60px');
        this.sp.style('background', 'yellow');
        this.sp.show();
        this.sp.mousePressed(()=>{
            if(score >= 25000 && food>=15000){
                score = score - 2;
                food = food-5;
                alert("Congrats ! you bought a solar plant for your city !!! \n Money Left: "+score+"\n Food Left:"+food);
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });

        this.wp.position(1100,430); 
        this.wp.style('width', '100px');
        this.wp.style('height', '60px');
        this.wp.style('background', 'yellow');
        this.wp.show();
        this.wp.mousePressed(()=>{
            if(score >= 15000 && food>=20000){
                score = score - 15000;
                food = food-20000;
                alert("Congrats ! you bought a water plant for your city !!! \n Money Left: "+score+"\n Food Left: "+food);
                
            }
            else{
                alert("You dont have sufficient money/food to buy this");
            }
        });
        
        for(var i=0; i<3; i++){
            
            this.allPlants[i]= createSprite(this.x,this.y,20,20);
            this.x+= 450;
            
            if(i===3){
                this.y= 250;
                this.x= 200;
            }

            switch(i){
                case 0: this.allPlants[i].addImage(solarPlant);
                this.allPlants[i].scale= 0.6;
                break;
                case 1: this.allPlants[i].addImage(electricPlant);
                this.allPlants[i].scale= 0.4;
                break;
                case 2: this.allPlants[i].addImage(waterPlant);
                this.allPlants[i].scale= 1;
                break;
                default: break;

            }
        }
        
    }
}    