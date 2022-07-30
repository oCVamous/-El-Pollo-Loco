class MoveableObject {
    x = 120;
    y = 280;
    img;
    height= 150;
    width= 100;
    imageCache = {};
    currentImage = 0;


    //loadImage('img/test.png);
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image"
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving-right');
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ... ]
     */
    loadImages(arr) {
            arr.forEach((path) => {
                let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
            })
        
    }

    moveLeft() {

    }
}