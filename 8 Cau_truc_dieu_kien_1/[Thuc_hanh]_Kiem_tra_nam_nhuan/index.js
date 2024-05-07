let year = parseInt(prompt("enter year: "))
if (year % 4 == 0){
    if (year % 100 ==0 ){
        if(year % 400 == 0){
            noti = year + ' is a Leap year';
        }
        else {
            noti = year + ' is not a leap year';
        }
    }else {
        noti = year + ' is a leap year'
    }
} else {
    noti = year + " is not a leap year"
}
alert(noti)