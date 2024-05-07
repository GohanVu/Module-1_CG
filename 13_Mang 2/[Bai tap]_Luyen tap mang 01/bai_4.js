//Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên
// và đảo ngược các phần tử trong mảng đó.


function checkSizeArr (n){
    return Number.isInteger(n)  && n > 0
}

function checkNumber(n){
    return Number.isInteger(n)
}

let sizeArr ;
do {
    sizeArr = +prompt("Enter size of arrays: ")
} while (!checkSizeArr(sizeArr))

let arr = []
let number ;
for (let i = 0; i < sizeArr; i++) {
    do {
        number = +prompt("Enter value "+(i+1))
    } while (!checkNumber(number))
    arr[i] = number
}
document.write('Arrays: ')
for (let i = 0; i < sizeArr; i++) {
    document.write(arr[i]+ " ")
}


let first = 0 ;
let last = arr.length-1;

while (first<last){
    let b = arr[first]
    arr[first]= arr[last]
    arr[last] =b
    first ++
    last --
}
document.write("<br>"+"Revese array: ")
for (let i = 0; i < sizeArr; i++) {
    document.write(arr[i] + " ")
}
