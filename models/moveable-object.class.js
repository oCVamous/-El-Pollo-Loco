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
    energy = 100;
    lastHit = 0;

    applyGravitiy() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken) {

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            //ctx.rect(this.img, this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }

    //character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit() = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = (new Date().getTime() - this.lastHit)/1000; //fifferenz in Milisekunden
        timepassed = timepassed/10000; //Differenz in Sekunden
        console.log(timepassed);
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
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
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;        
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; //let i = 7 % 6; 1, Rest 1
        //i = 0, 1, 2, 3, 4, 5, 0, ...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }

   
}