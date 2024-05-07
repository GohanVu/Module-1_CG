//Bài 1: Chuyển từ độ C sang độ F.
function covertCtoF (n){
    if (n > 10000){
        return "To high"
    } else if (n < -10000){
        return  "To low"
    } else{
        return (n*9/5) + 32
    }
}

let input = +prompt("Enter C value: ")
alert(covertCtoF(input))