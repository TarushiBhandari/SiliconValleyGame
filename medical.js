class Medical{
    constructor(){
        this.x= 100;
        this.y= 300;
        this.money= score;
    
        this.creamButton= createButton('150 INR Food-20 units');
        this.bandageButton= createButton('2 INR Food-5 units');
        this.crepeButton= createButton('200 INR Food-25 units');
        this.syringeButton= createButton('100 INR Food-30 units');
        this.syrupButton= createButton('100 INR Food-40 units');

        this.cancelButton= createButton('Go Back');
    }

    display(){

        this.cancelButton.position(1270,30); 
        this.cancelButton.style('width', '50px');
        this.cancelButton.style('height', '40px');
        this.cancelButton.style('background', 'red');
        this.cancelButton.show();

        this.creamButton.position(50,370); 
        this.creamButton.style('width', '100px');
        this.creamButton.style('height', '40px');
        this.creamButton.style('background', 'cyan');
        this.creamButton.show();

        this.bandageButton.position(320,370); 
        this.bandageButton.style('width', '100px');
        this.bandageButton.style('height', '40px');
        this.bandageButton.style('background', 'cyan');
        this.bandageButton.show();

        this.crepeButton.position(620,370); 
        this.crepeButton.style('width', '100px');
        this.crepeButton.style('height', '40px');
        this.crepeButton.style('background', 'cyan');
        this.crepeButton.show();

        this.syringeButton.position(880,370); 
        this.syringeButton.style('width', '100px');
        this.syringeButton.style('height', '40px');
        this.syringeButton.style('background', 'cyan');
        this.syringeButton.show();

        this.syrupButton.position(1180,370); 
        this.syrupButton.style('width', '100px');
        this.syrupButton.style('height', '40px');
        this.syrupButton.style('background', 'cyan');
        this.syrupButton.show();
        
        for(var i=0; i<6; i++){
            
            var medicine= createSprite(this.x,this.y,20,20);
            this.x+= 280;
            
            if(i===6){
                this.y= 250;
                this.x= 100;
            }

            switch(i){
                case 0: medicine.addImage(cream);
                medicine.scale= 0.5;
                break;
                case 1: medicine.addImage(bandage);
                medicine.scale= 0.3;
                break;
                case 2: medicine.addImage(crepeBandage);
                medicine.scale= 0.2;
                break;
                case 3: medicine.addImage(syringe);
                medicine.scale= 0.2;
                break;
                case 4: medicine.addImage(syrupMed);
                medicine.scale= 0.1;
                break;
                default: break;

            }
        }
        
    }
}    