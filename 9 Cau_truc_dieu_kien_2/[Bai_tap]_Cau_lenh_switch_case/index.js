function calculatorFunc(){
    let month = + document.getElementById("input").value ;
    let result ;
    switch (month) {
        case 1 :
        case 3:
        case 5 :
        case 7 :
        case 8:
        case 10:
        case 12:
            result = "The month: "+ month + " has 31 days";
            break ;
        case 4:
        case 6:
        case 9:
        case 11:
            result ="The month: "+month + " has 30 days";
            break;
        case 2 :
            result = "The month: "+ month + " has 28 & 29 days";
            break;
        default:
            result ="Incorrectly, type again!"
            break;
    }
    document.getElementById('notifi').innerHTML =result
}



