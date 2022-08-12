class Chicken extends MoveableObject {

    height = 55;
    width = 70;
    y = 360;
    IMAGES_WALKING= [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; //Zahl immer zwischen 200 und 700
        this.speed = 0.15 + Math.random()* 0.5;

        this.animate();
        
    }

    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000/60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

        /**
         * setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; //let i = 7 % 6; 1, Rest 1
            //i = 0, 1, 2, 3, 4, 5, 0, ...
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
         */
        
        
    }
    
}