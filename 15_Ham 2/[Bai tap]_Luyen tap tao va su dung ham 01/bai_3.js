function compareNumber (numb1,numb2){
    if (numb1>numb2){
        alert("First number greater than second number!")
    } else {
        let sum = numb1 + numb2
        document.write("Sum of 2 number is: "+sum)
    }
}

function checkNumber(n){
    return isNaN(n)
}
let input1;
let input2;
do {
     input1 = +prompt("Enter the first number: ")
} while (checkNumber(input1))

do {
    input2 = +prompt("Enter the second number: ")
} while (checkNumber(input2))

compareNumber(input1,input2)