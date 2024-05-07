class Phone{
    constructor(code,name,producer,price) {
        this.code = code;
        this.name = name;
        this.producer = producer;
        this.price = price;
    }
    getCode(){
        return this.code
    }
    getName(){
        return this.name;
    }
    getProducer(){
        return this.producer;
    }
    getPrice(){
        return this.price
    }
    setCode(code){
        this.code = code;
    }
    setName(name){
        this.name = name;
    }
    setProducer(producer){
        this.producer = producer;
    }
    setPrice (price){
        this.price = price
    }
    toString(){
        return `Code: ${this.code} <br>Name: ${this.name}<br>Producer: ${this.producer}<br>Price: ${this.price}`
    }
}

let phone1 = new Phone('001',"Iphone 15","Iphone",5000)


document.write(phone1.toString())