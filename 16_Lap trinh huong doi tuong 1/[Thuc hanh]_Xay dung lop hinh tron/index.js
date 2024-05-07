class Circle{
    constructor(radius) {
        this.radius= radius;
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius){
        this.radius = radius
    }
    getArea(){
        return  (Math.PI * this.radius * this.radius).toFixed(5);
    }
}

let myCricle = new Circle(2)
myCricle.setRadius(5)
let myRadius = myCricle.getRadius()
let myArea = myCricle.getArea()

alert(myRadius+ '---'+ myArea)