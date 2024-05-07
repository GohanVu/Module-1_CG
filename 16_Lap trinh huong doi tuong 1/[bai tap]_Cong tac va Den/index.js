class ElectricLamp{
    constructor(status) {
        this._status =status;
    }
    turnOn(){
        this._status = true;
    }
    turnOff(){
        this._status = false;
    }
}
class SwitchButton{
    constructor(status, lamp) {
        this._status = status;
        this._lamp = lamp;
    }
    //Tuong tu voi set lamp
    connectToLamp(lamp){
        this._lamp = lamp;
    }
    switchOff(){
        this._status= false;
        this._lamp.turnOff();
    }
    switchOn(){
        this._status = true;
        this._lamp.turnOn();
    }
}
let lamp = new ElectricLamp(false);
let switchButton = new SwitchButton(false,lamp)