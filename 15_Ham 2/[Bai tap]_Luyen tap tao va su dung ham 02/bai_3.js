//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.

function calculateFactorial(n){
    let sum = 1;
    if (n == 0) {
        sum =1
    } else{
        for (let i = 1; i <= n ; i++) {
            sum *= i
        }
    }
    return sum
}

function checkNumber(n){
    return isNaN(n) || n < 0
}

do {
    number = prompt("Enter your number: ")
} while (checkNumber(number))

let outputFactorial = calculateFactorial(number)
alert("Factorial of "+number+" is: "+outputFactorial)