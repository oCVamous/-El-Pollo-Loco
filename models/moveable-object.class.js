class MoveableObject extends DrawableObject {

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
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //fifferenz in Milisekunden
        timepassed = timepassed / 1000; //Differenz in Sekunden
        console.log(timepassed);
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
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