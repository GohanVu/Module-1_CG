class MyDate {
    constructor(day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day
    }
    getMonth(){
        return this.month
    }
    getYear(){
        return this.year
    }
    setDay(day){
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day,month,year){
        this.day=day;
        this.month=month;
        this.year = year;
    }
    toString(){
        return day.toString().padStart(2,'0')+"/"+month.toString().padStart(2,'0')+"/"+year
    }

}

let date = new MyDate(24,4,2024)
date.setDay(18)
date.setMonth(11)
date.setYear(1997)
date.setDate(2,2,2022)

let day = date.getDay();
let month = date.getMonth();
let year = date.getYear()
let string = date.toString()

alert(string)