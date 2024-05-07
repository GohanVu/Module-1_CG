//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.

function checkNumber (n){
    return isNaN(n) || n < 0
}
let number = +prompt("Enter your number: ")
alert(!checkNumber(number))