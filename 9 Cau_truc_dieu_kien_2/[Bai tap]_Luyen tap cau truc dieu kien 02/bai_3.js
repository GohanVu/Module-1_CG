//Bài 3: Tính diện tích hình vuông khi biết cạnh a.

function calculateArea (n){
    return n*n
}
let input;
do {
     input = +prompt("Enter value: ")
} while (input<=0 || isNaN(input))

alert("The area of a square with side length "+input+" is: "+calculateArea(input))