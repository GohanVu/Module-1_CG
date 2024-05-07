//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
// Gọi hàm vừa xây dựng được

function calculateArea (n){
    return Math.PI * n*n
}

function calculatePerimeter (n){
    return 2 * Math.PI * n
}

function  checkNumber(n){
    return isNaN(n)
}

do {
    number = prompt("Enter radius value: ")
} while (checkNumber(number))

let outputArea = calculateArea(number)
let outputPerimeter = calculatePerimeter(number)

alert("Radius: "+number+ " .Area: "+outputArea)
alert("Radius: "+number+" Perimeter: "+outputPerimeter)