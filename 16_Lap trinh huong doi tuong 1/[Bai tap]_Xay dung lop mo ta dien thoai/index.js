class Mobile{
    constructor(battery,draft,inbox,sentMessage, status,phoneNumber ) {
        this.battery = battery;
        this.darft = draft;
        this.inbox = inbox;
        this.sentMessage = sentMessage;
        this.status = status;
        this.phoneNumber = phoneNumber
    }
    isTurnOnOrOff(){
        return this.status;
    }
    turnOn(){
        this.status= true;
    }
    turnOff(){
        this.status= false;
    }
    chargeBattery(){
        //Bat dong bo
        // setInterval va ClearInterval
        while (this.battery<=100){
            this.battery= this.battery+0.01
        }
    }
    createMessage(){
        this.darft = prompt("Text here: ")
    }
    receiveMessage(message,mobile){
        this.inbox.unshift(message+"~"+mobile.phoneNumber)
    }
    sentMessage(mobile){
        this.createMessage();
        this.sentMessage.unshift(this.darft)
        mobile.receiveMessage(this.darft,this);
        this.darft='';
    }
    listSentMessage(){
        for (let i = 0; i < this.sentMessage(); i++) {
            //Display message

        }
    }

}