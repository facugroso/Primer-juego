
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

    //metodo sprite recibe tres valores por parametros. El primero es la posicion en x donde queremos que empiece nuestro jugador.El segundo parámetro es la coordenada en y. el tercer parámetro es elpersonaje
    player = this.physics.add.sprite(100, 200, 'dude');

    //para que el personaje permanezca en el rango de nuetra pantalla.
    player.setCollideWorldBounds(true)
    //varia entre cero y uno, la caída. Cero no pica y uno pica muchas veces santes de detenerse.
    player.setBounce(0.3)

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    //player.body.setGravityY(300);

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: {x: 12, y:0, stepX: 70}
    });

    stars.children.iterate(function(child){
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    })


    this.physics.add.collider(stars, platforms)

    this.physics.add.overlap(player, stars, collectStar, null, true)

} 


function update() {
    if (cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }else{
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if(cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-350)

    }
}

function collectStar(player, star){
    star.disableBody(true, true)
}