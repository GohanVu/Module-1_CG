let input = null
do {
    input = prompt("Enter your number 0-10");
} while (input < 1 || input > 10)
alert("Your number: "+ input)