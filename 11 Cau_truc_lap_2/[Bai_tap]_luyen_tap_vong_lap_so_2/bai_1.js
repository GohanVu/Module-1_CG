//Bài 1: In dãy Fibonaci

/// Tao function check so fibonacci
function checkFibonacci(n){
    if (n<0) return false;
    if (n<=1) return true;
    let a= 0;
    let b= 1;
    let c ;
    for (let i = 1; i <=n ; i++) {
        if (n ===a+b){
            return true
            break;
        } else {
            c= a+b;
            a=b;
            b=c;
        }

    }
    return false
}

//In dãy Fibonaci ( 20 so)

let count = 0
let number = 1
document.write("0 1 ")
while (count<18){
    if (checkFibonacci(number)){
        document.write(number+ " ")
        count++
    }
    number++
}
