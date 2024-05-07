// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.


function checkFibonacci(n){
    if (n<0) return false;
    if(n<=1)return true;
    let a = 0;
    let b =1;
    let c;
    for (let i = 1; i <= n; i++) {
        if (n == a+b){
            return true;
            break;
        }
        else {
            c = a+b;
            a=b;
            b=c;
        }
    }
    return false
}

let count = 0
let number = 1
let sum =1

while (count<18){
    if (checkFibonacci(number)){
        sum+=number
        count++
    }
    number++
}
alert(sum)

