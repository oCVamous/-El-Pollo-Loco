class MoveableObject {
    x = 120;
    y = 280;
    img;
    height= 150;
    width= 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravitiy() {
        setInterval(() => {
            if(this.isAboveGround()) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
            
        }, 1000/25);
    }

    isAboveGround() {
        return this.y < 180;
    }


    //loadImage('img/test.png);
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image"
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ... ]
     */
    loadImages(arr) {
            arr.forEach((path) => {
                let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
            })
        
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }
}