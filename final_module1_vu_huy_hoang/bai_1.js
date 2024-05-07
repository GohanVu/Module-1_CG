function  checkInput(n){
    return Number.isInteger(n) && n > 0
}

function checkSize (m){
    return Number.isInteger(m) && m>0 && m <20
}
function calculateArr(arr){
    let sumEven =0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 ==0){
            sumEven += arr[i]
        } else {
            sumOdd += arr[i]
        }
    }
    return sumEven - sumOdd
}

let sizeArr = 0
do {
    sizeArr = +prompt('Enter number of value (<=20): ')
    }
while (!checkSize(sizeArr))


let arr=[]

for (let i = 0; i < sizeArr; i++) {
    do {
        number = +prompt("input "+ (i+1))
    } while (!checkInput(number))
    arr[i] = number
}

document.write("Array: "+arr+ "<br>")
document.write('Sum: '+calculateArr(arr) )