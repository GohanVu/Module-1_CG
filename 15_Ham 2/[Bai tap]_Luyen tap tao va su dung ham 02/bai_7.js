//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.

function checkNumber(n){
    return isNaN(n)
}

function swapNumber(num1,num2){
    let b = num1
    num1 = num2
    num2 = b
    return [num1, num2]
}
let arr =[]
for (let i = 0; i < 2; i++) {
    do{
        number = +prompt("Enter number "+(i+1)+" :")
    } while (checkNumber(number))
    arr[i]= number
}
let output = swapNumber(arr[0],arr[1])
alert("Origin: "+ arr +" Swap: "+output)