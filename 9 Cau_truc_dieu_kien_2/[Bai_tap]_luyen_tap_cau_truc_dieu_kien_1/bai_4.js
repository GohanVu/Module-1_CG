let firstNumber = +prompt("Enter first number: ");
let secondNumber = + prompt("Enter second number: ");
let thirdNumber = +prompt("Enter third number: ")

if (firstNumber > secondNumber){
    if (firstNumber > thirdNumber){
        alert("The largest value is: "+firstNumber)
    } else {
        alert("The largest value is: "+ thirdNumber)
    }
} else {
    if (secondNumber > thirdNumber){
        alert("The largest value is: "+ secondNumber);
    } else {
        alert("The largest number is: "+thirdNumber)
    }
}