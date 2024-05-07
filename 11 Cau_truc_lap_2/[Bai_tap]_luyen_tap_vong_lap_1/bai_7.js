//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

function checkNumber(n){
    if (n % 5 == 0 && n % 3 == 0){
        document.write(n + " FizzBuzz"+ "<br>");
    } else if (n % 5 == 0){
        document.write(n+ " Buzz"+ "<br>");
    } else if (n % 3== 0){
        document.write(n + " Fizz"+ "<br>");
    } else {
        document.write(n + " "+ "<br>")
    }
}

for (let i = 1; i <= 100; i++) {
    checkNumber(i)
}
