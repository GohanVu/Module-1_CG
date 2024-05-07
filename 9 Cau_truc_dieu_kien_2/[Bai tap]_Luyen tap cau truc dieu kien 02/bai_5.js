function calculateArea(num1,num2){
    return (num1*num2)/2
}
let input1 ;
do {
    input1 = +prompt("Enter number: ")
} while (isNaN(input1) || input<=0)

let input2 ;
do{
    input2 = +prompt("Enter number: ")
} while (isNaN(input2) || input2<=0)

alert(calculateArea(input1,input2))