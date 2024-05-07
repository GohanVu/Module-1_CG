//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// tao 1 function kiem tra so fibonacci
function checkFibonaci(n){
    if (n<0)  return false;
    if(n<=1)   return true;
    let a = 0;
    let b = 1;
    let c;
    for (let i = 1; i <= n; i++) {
        if (n == a+b){
            return true;
            break;
        } else {
            c=a+b;
            a=b;
            b=c;
        }
    }
    return false;
}

// hien thi
let count =0;
let number = 1;
document.write('0 1 ');
while (count<18){
    if (checkFibonaci(number)){
        document.write(number+ ' ');
        count++
    }
    number++
}