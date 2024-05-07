function checkInput(n){
    return Number.isInteger(n) && n > 0
}
function isPrime(m){
    if(m<1) return false;
    if(m<4) return  true;
    for (let i = 2; i < Math.sqrt(m); i++) {
        if(m % i === 0){
            return false
        }
    }
    return true;
}

let sizeArr = 0;
do {
    sizeArr =+prompt("Enter number of value: ")
} while (!checkInput(sizeArr))

let arr = [];
for (let i = 0; i < sizeArr; i++) {
    do {
        number = +prompt("input "+(i+1))
    } while (!checkInput(number))
    arr[i] = number
}

let arrPrime = []
for (let i = 0; i < sizeArr; i++) {
    if (isPrime(arr[i])){
        arrPrime[i] = arr[i]
    }
}
arrPrime.sort(function (a,b){
    return a-b
})
document.write('arr prime: '+ arrPrime)