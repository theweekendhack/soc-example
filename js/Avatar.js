class Avatar  
{
    name;
    img;
    chosen=false;
    powerLevel;
     
    
    constructor(name,img,powerLevel)
    {
        this.name=name;
        this.img=img;
        this.powerLevel =powerLevel;

    }

    increasePowerLevel(newPowerAmt)
    {

        this.powerLevel+=newPowerAmt
    }

    selected()
    {
        this.chosen= !this.chosen;
    }


}


export default Avatar;