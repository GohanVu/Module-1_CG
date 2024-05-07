//Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

function compareString(string1, string2){
    if (string1 === string2){
        document.write("String 1: "+ string1+"<br>")
        document.write("String 2: "+ string2 +"<br>")
        document.write("Two strings are the same")
    } else {
        document.write("String 1: "+string1+ "<br>")
        document.write("String 2: "+string2+ "<br>")
        document.write("Two strings are not the same")
    }
}

let input1 = prompt("input string 1: ")
let input2 = prompt("input string 2: ")

compareString(input1,input2)