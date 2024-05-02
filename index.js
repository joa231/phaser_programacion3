class EscenaInicial extends Phaser.Scene{

    // Cargamos los recursos del juego (sprites, audios, mapas, etc...)
    preload(){
        this.load.image("fondo","assets/background/Space-Background-1.jpg")//pone el fondo 
        this.load.spritesheet("snape", "assets/sprites/snape.png", {frameWidth:32, frameHeight:48})

        this.load.image("nave", "assets/sprites/fighterspr1.png")//pone la nave

        this.load.image("disparo", "assets/sprites/shot.png")//pone los disparos de la nave

    }

    //Se ejecuta una sola vez al comienzo del juego.
    //Por ejemplo, haremos acciones como ubicar 
    //las imagénes en la pantalla
    create(){
        this.add.sprite(150, 150, "fondo")//el 300 y 400 son las coordenadas,es la posicion.y indicamos el nombre de la imagen.
        this.snape = this.add.sprite(500, 150, "snape")

        this.disparos = this.physics.add.group();//crea un grupo para los disparos

        this.keyd = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.keya = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyw = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)



        this.teclas = this.input.keyboard.createCursorKeys() //teclado
        //animaciones
        this.anims.create({
            key: "izquierda",
            frames: this.anims.generateFrameNames("snape", {start:0, end:3}),
            frameRate:10

        })

        this.anims.create({
            key: "derecha",
            frames: this.anims.generateFrameNames("snape", {start:5, end:7}),
            frameRate:10

        })

        this.anims.create({
            key: "abajo",
            frames: this.anims.generateFrameNames("snape", {start:4, end:4}),
            frameRate:20

        })
        this.anims.create({
            key: "arriba",
            frames: this.anims.generateFrameNames("snape", {start:4, end:4}),
            frameRate:20

        })

        this.nave = this.add.sprite(180, 150, "nave") //muestra la nave en pantalla y donde posicionarlo
        this.nave.setScale(0.2)


        //this.disparo = this.add.sprite(150, 150, "disparo")
        //this.disparo.setScale(0.3)// para achicar el disparo


        this.space_disparo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        
    }

    

    //Se ejecuta de manera constante durante todo el tiempo del videojuego
    // acciones del personaje, colisiones entre otros eventos
    // que se necesiten
    update(){

        if (this.keyd.isDown){
            this.nave.x+=5
        }
        if (this.keya.isDown){
            this.nave.x-=5
        }
        if (this.keyw.isDown){
            this.nave.y-=5
        }
        if (this.keys.isDown){
            this.nave.y+=5
        }

        if (this.teclas.left.isDown){
            this.snape.anims.play("izquierda")
            this.snape.x -= 5

        }else if (this.teclas.up.isDown){
            this.snape.anims.play("arriba")
            this.snape.y-= 5
        }

        else if (this.teclas.down.isDown){
            this.snape.anims.play("abajo")
            this.snape.y -= -5
        }

        else if (this.teclas.right.isDown){
            this.snape.anims.play("derecha")
            this.snape.x -= -5
        }

        if (this.space_disparo.isDown){
            console.log("disparo")
            this.disparo = this.physics.add.sprite(this.nave.x+50,this.nave.y, "disparo").setScale(0.1)
            
        }

        if (this.disparo){
            this.disparo.x += 3
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
    },
};

new Phaser.Game(config);
