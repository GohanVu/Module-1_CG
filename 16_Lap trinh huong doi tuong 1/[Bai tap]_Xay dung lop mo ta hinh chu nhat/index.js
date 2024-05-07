class Rectangle{
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    setWidth(width){
        this.width=width;
    }
    setHeight(height){
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return (this.width+this.height)*2
    }
}

let myRectangle = new Rectangle(5,2)
myRectangle.setWidth(7);
myRectangle.setHeight(3)
let myWidth = myRectangle.getWidth();
let myHeight = myRectangle.getHeight();
let myArea = myRectangle.getArea()
let myPerimeter = myRectangle.getPerimeter()

alert(myWidth+"---"+myHeight+"---"+myArea+"---"+myPerimeter)


let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
ctx.fillStyle = '#fa4b2a'
ctx.fillRect(10,10,width,height)