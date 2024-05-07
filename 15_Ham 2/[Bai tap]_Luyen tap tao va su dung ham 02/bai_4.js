//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.

function checkNumber(n){
    return !isNaN(n)
}
let number = prompt("Enter your number: ")
let output = checkNumber(number)
alert(output)