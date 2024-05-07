//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.
do{
    number = prompt('Enter your number: ')
} while (checkNumbers(number))

squareValue = calculateSquare(number)
alert("Square of "+number+" is: "+ squareValue)

function calculateSquare (n){
    return n*n
}

function checkNumbers(n){
    return isNaN(n)
}

