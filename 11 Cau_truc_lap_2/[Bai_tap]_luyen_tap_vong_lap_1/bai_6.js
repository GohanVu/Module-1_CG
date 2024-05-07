//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên

// function checkDivisibleBy7(n){
//     if (n < 7) return false;
//     if (n % 7==0){
//         return true;
//     } else {
//         return false
//     }
// }
//
//
// let sum =0
// let count = 0
// let number = 7
// while (count< 30){
//     if (checkDivisibleBy7(number)){
//         sum+= number;
//         count++
//     }
//     number +=7
// }
// alert(sum)

let count = 0; // Đếm số lượng số chia hết cho 7
let sum = 0; // Tổng các số chia hết cho 7
let number = 1; // Bắt đầu từ số tự nhiên đầu tiên

while (count < 30) {
    if (number % 7 === 0) {
        sum += number;
        count++;
    }
    number++;
}

console.log("Tổng của 30 số chia hết cho 7 đầu tiên là: " + sum);