function checkArray(n){
    return isNaN(n) || n <= 0
}

function checkNumber(n){
    return isNaN(n)
}

function reverseArray(n){
    let last = n.length-1
    let first = 0
    while (first<last){
        let b = n[first];
        n[first] = n[last];
        n[last] = b;
        first ++
        last --
    }
    return n
}

do {
    sizeArr = prompt("Enter size of array:")
} while (checkArray(sizeArr))

let arr =[]
for (let i = 0; i < sizeArr; i++) {
    do{
        number = +prompt("Enter number "+ (i+1)+" :")
    } while (checkNumber(number))
    arr[i] = number
}

reverseArray(arr)
document.write(" Reversed: "+ arr)