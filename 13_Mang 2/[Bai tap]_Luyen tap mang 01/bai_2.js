//Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.



function  checkInput(n){
    return Number.isInteger(n) || !isNaN(n) && (n !== null && n !== undefined)
}
let arr=[]
let number = 0;
for (let i = 0; i < 10; i++) {
    do {
        number = +prompt("input "+ (i+1))
    } while (!checkInput(number))
    arr[i] = number
}


let max = arr[0]
let index = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i]
        index = i
    }
}
document.write("number: "+ max +" index: "+ index)