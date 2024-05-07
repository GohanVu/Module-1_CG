//Bài 2: Chuyển từ mét sang feet:
function convertMtoF(n){
    if (n > 10000){
        return "to high"
    } else if (n < -10000){
        return  "to low"
    } else {
        return  n * 3.2808
    }
}

let input = +prompt("Enter meter value: ")
alert(convertMtoF(input))