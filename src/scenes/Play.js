class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    create(){
        // Rocket Patrol Menu
        this.add.text(20,20, "Rocket Patrol Menu");

        //white rectangle borders
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 630, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        //green UI background
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);
    }

    update(){
        //scroll starfield
        this.starfield.tilePositionX -= 4;
        this.starfield.tilePositionY -= 4;
    
    }
}
