
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: { y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}; 

let game = new Phaser.Game(config);


function preload() {

    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight:48});

}
function create(){
    this.add.image(400, 300, 'sky');
    //crea un nuevo grupo de elementos estàticos y los agrega a la variable local platforms.
    //cuerpo dinámico: cuerpo que si le aplico fuerza, se mueve, puede chocar con otros elementos
    //cuerpo estàtico: siempre tiene una posición y un tamaño. Cuando algo choca contra el no se mueve.
    platforms = this.physics.add.staticGroup();
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(100, 290, 'ground');
    platforms.create(750, 220, 'ground');


}
function update() {
    
}