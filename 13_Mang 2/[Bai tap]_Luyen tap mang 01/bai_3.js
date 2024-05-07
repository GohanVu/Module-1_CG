//Bài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó.
// In ra giá trị trung bình của các phần tử trong mảng.

function  checkInput (n){
    return Number.isInteger(n) && n >0
}

function checkNumber(n){
    return Number.isInteger(n)
}

let sizeArr ;
do {
    sizeArr = +prompt("input size arr")
} while (!checkInput(sizeArr))


let arr = []

for (let i = 0; i < sizeArr; i++) {
    do{
        number = +prompt("input number "+(i+1))
    } while (!checkNumber(number))
    arr[i] = number
}

let max = arr[0]
let avg = 0;
let sum =0
for (let i = 0; i < sizeArr; i++) {
    if (arr[i] > max){
        max = arr[i]
    }
}
document.write("The greatest value is: "+max + "<br>")
for (let i = 0; i < sizeArr; i++) {
    sum += arr[i]
}
avg = sum / sizeArr
document.write("Average is: "+ avg)