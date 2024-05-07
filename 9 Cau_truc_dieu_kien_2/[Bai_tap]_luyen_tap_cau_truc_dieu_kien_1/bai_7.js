let standardFee = 10;
let minutesCall = +prompt("Enter your minutes of call: ");
let textNumber = +prompt("Enter your number of text messages:")

let totalFee = standardFee + (minutesCall*0.2) + (textNumber* 0.1)

document.write("Your total phone bill is: $" + totalFee)