//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ,
// trả về số nguyên có giá trị nhỏ nhất.

function checkNumber(n){
    return isNaN(n)
}
function compareNumber(num1,num2,num3){
    if (num1 <= num2){
        if(num1 <= num3){
            return num1
        } else {
            return num3
        }
    } else {
        if (num2 <= num3){
            return num2
        } else {
            return num3
        }
    }
}
let arr = []
for (let i = 0; i < 3; i++) {
    do {
        number = +prompt("Enter number "+"0"+(i+1))
    }while (checkNumber(number))
    arr[i] = number
}
let output = compareNumber(arr[0],arr[1],arr[2])
alert("The smallest number between "+arr[0]+", "+arr[1]+", "+arr[2]+" is: "+ output)