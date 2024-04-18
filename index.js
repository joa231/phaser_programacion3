class EscenaInicial extends Phaser.Scene{

    // Cargamos los recursos del juego (sprites, audios, mapas, etc...)
    preload(){
        this.load.image("fondo","assets/background/Space-Background-1.jpg")
        this.load.spritesheet("snape", "assets/sprites/snape.png", {frameWidth:30, frameHeight:48})
    }

    //Se ejecuta una sola vez al comienzo del juego.
    //Por ejemplo, haremos acciones como ubicar 
    //las imagénes en la pantalla
    create(){
        this.add.sprite(150, 150, "fondo")//el 300 y 400 son las coordenadas,es la posicion.y indicamos el nombre de la imagen.
        this.snape = this.add.sprite(500, 150, "snape")

        this.teclas = this.input.keyboard.createCursorKeys()

        this.anims.create({
            key: "izquierda",
            frames: this.anims.generateFrameNames("snape", {start:0, end:3}),
            frameRate:10

        })

        this.anims.create({
            key: "derecha",
            frames: this.anims.generateFrameNames("snape", {start:5, end:8}),
            frameRate:10

        })

        this.anims.create({
            key: "arriba",
            frames: this.anims.generateFrameNames("snape", {start:0, end:3}),
            frameRate:10

        })
        this.anims.create({
            key: "abajo",
            frames: this.anims.generateFrameNames("snape", {start:5, end:8}),
            frameRate:10

        })





    }

    //Se ejecuta de manera constante durante todo el tiempo del videojuego
    // acciones del personaje, colisiones entre otros eventos
    // que se necesiten
    update(){
        if (this.teclas.left.isDown){
            this.snape.anims.play("izquierda")
            this.snape.x -= 3
        }else if (this.teclas.right.isDown){
            this.snape.anims.play("derecha")
            this.snape.x += 3
        }
    
    }
}

//Configuracion inicial del juego. Es un objeto JSON
const config = {
    type: Phaser.AUTO, // renderizado del juego (CANVAS, WEBGL, HEADLESS, AUTO)
    with: 600, //ancho del canvas
    height: 800, // alto del canvas
    scene: [EscenaInicial], // escena de un videojuego. Si hay mas de 1 se usan listas
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            
        },
    }
};

new Phaser.Game(config);
