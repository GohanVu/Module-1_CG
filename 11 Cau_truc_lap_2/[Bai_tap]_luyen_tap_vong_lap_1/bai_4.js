//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

let number =1;
let  count =0;
while (count<18){
    if (checkFibonacci(number)){
        if (number % 5 ===0){
            alert("The first number in the fibonacci sequence divisible by 5 is: "+ number);
            break;
        }
    }
    number++
    count++
}

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



