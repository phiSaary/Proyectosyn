var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var enfermera;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('enfermera', 'C:/Users/tatiana.rojas/OneDrive - SYNLAB/Desktop/PROYECTO/enfermera.png');
}

function create() {
    enfermera = this.physics.add.sprite(400, 300, 'enfermera');
    enfermera.setCollideWorldBounds(true);
}

function update() {
    var cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        enfermera.x -= 5;
    } else if (cursors.right.isDown) {
        enfermera.x += 5;
    }

    if (cursors.up.isDown) {
        enfermera.y -= 5;
    } else if (cursors.down.isDown) {
        enfermera.y += 5;
    }
}
