function isPrime(n){
    if (n < 1) return false;
    if (n< 4) return true;
    for (let i = 2; i < Math.sqrt(n) ; i++) {
        if (n % i === 0){
            return  false
        }
        else {
            return true
        }
    }
}
function  isNumber(n){
    return isNaN(n)
}
let number;
do{
    number = +prompt("Enter your number")
} while (isNumber(number))

if (isPrime(number)){
    result = number + " is prime number"
} else {
    result = number + " is not prime number"
}
alert(result)