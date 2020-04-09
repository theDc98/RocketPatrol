class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    create(){
        console.log(this);
        this.add.text(20, 20, "Roecket Patrol Menu");

        // launch the next scene
        this.scene.start("playScene");
    }

}