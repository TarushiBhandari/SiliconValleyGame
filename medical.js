class Medical{
    constructor(){
        this.x= 100;
        this.y= 100;
    
    }

    display(){

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
                medicine.scale= 0.07;
                break;
                case 3: medicine.addImage(syringe);
                medicine.scale= 0.2;
                break;
                case 4: medicine.addImage(syrupMed);
                medicine.scale= 0.3;
                break;
                case 5: medicine.addImage(tabletMed);
                medicine.scale= 0.3;
                break;
                default: break;

            }
        }
    }

    
}    