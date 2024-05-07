//Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi
function checkArr(n){
    return Number.isInteger(n) && n > 0
}
function checkNumber(n){
    return Number.isInteger(n)
}

function checkNegativeNumber(n){
    return n < 0
}

let sizeArr ;
do {
    sizeArr = +prompt("Enter size of arrays: ")
} while (!checkArr(sizeArr))

let arr = []
let number ;
for (let i = 0; i < sizeArr; i++) {
    do {
        number = +prompt("Enter value "+(i+1)+ " :")
    } while (!checkNumber(number))
    arr[i] = number
}
document.write("Arrays: ")
for (let i = 0; i < sizeArr; i++) {
    document.write(arr[i]+ " ")
}
document.write("<br>"+"Negative values: ")
let count = 0;
for (let i = 0; i < sizeArr; i++) {
    if (checkNegativeNumber(arr[i])){
        count++
        document.write(arr[i]+ " ")
    }
}
document.write("<br>"+ "number of negative value: "+ count)