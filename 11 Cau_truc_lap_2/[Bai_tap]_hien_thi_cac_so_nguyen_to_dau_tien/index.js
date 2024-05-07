function  isPrime(n) {
    if (n< 2) return false;
    if (n <4) return  true;
    for (let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
let start = 2
let number = +prompt("Enter number of prime you want");
let count = 0 ;

while (count < number){
    if(isPrime(start)){
        document.write(start+" ")
        count++
    }
    start++
}

