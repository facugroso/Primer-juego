const Phaser = require("phaser");

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}; 

let game = new Phaser.Game(config);


function perload() {

    this.load.image('sky', 'assets/sky.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('dude', 'assets/dude.png', {frameWidth: 32, frameHeight:48});

}

function update() {
    
}