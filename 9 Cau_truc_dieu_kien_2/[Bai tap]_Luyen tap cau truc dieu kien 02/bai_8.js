function  isAge(n){
    return !isNaN(n) && Number.isInteger(n) && n < 120 && n >0
}

let input = +prompt("Enter age: ")
if (isAge(input)){
    alert(input+ " is age of the human")
} else {
    alert(input+ " is not age of the human")
}