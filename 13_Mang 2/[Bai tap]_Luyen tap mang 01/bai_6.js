//Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình tìm xem V có nằm trong mảng số nguyên không?
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".

//Cac function kiem tra
function  checkArr (n){
    return Number.isInteger(n) && n > 0
}

function checkNumber(n){
    return Number.isInteger(n)
}

function checkValueV(n){
    for (let i = 0; i < sizeArr; i++) {
        if( n === arr[i]){
            return true
            break;
        }
    }
    return false
}
//Tao kich thuoc mang
let sizeArr ;
do{
    sizeArr = +prompt("Enter size of arrays: ")
} while (!checkArr(sizeArr))
// Nhap gia tri cua mang
let arr = []
let number;
for (let i = 0; i < sizeArr; i++) {
    do{
        number = +prompt("enter value "+(i+1)+" :")
    } while (!checkNumber(number))
    arr[i] = number
}
// In mang ra man hinh
document.write("Arrays: ")
for (let i = 0; i < sizeArr; i++) {
    document.write(arr[i]+ " ")
}
// Nhap gia tri V
let numberV ;
do{
    numberV = +prompt("Enter V number: ")
} while (!checkNumber(numberV))
document.write("<br>"+ "numberV: "+ numberV +"<br>")
//Check V
if (checkValueV(numberV)){
    document.write("V is in the arrays")
} else {
    document.write("V is not in the arrays")
}
