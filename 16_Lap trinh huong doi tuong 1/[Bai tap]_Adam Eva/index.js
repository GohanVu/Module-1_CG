class Apple{
    constructor(weight) {
        this._weight = weight
    }
    decrease (){
        this._weight -= 10;
    }
    isEmpty(){
        return this._weight <= 0 ? true: false;
    }
    getWeight (){
        return this._weight
    }
}
class Human{
    constructor(name,gender,weight) {
        this._name = name;
        this._gender =gender;
        this._weight = weight;
    }
    checkApple(apple){
        return !apple.isEmpty();
    }
    eat(apple){
        if(apple.getWeight()>0){
            apple.decrease();
            this._weight += 10;
        }
    }
}
let apple = new Apple(100);

let adam = new Human("Adam",true,70)
adam.eat(apple);

let eva = new Human("Eva",false,50)
eva.eat(apple)

