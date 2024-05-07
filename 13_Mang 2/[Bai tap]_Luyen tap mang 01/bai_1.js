//Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.



let arr = []
let number ;
for (let i = 0; i < 10; i++) {
    do {
        number = +prompt("input "+(i+1)+ " :")
    } while (!checkInput(number))
    arr[i] =number
}


let count = 0;
let length = arr.length;
for (let i = 0; i < length; i++) {
    if (checkNumber(arr[i])){
        count ++
    }
}
alert(count)

function checkNumber(n){
    return n >= 10 ;
}

function  checkInput(n){
        return Number.isInteger(n) || !isNaN(n)
    }