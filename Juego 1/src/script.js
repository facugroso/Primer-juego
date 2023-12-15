const Phaser = require("phaser");

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        perload: preload,
        create: create,
        update: update,
    }
}; 

let game = new Phaser.Game(config);


function perload() {

}

function create() {

}

function update() {
    
}