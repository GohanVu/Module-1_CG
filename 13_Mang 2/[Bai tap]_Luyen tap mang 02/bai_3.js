//Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng.
// Chương trình này đếm số ký tự số trong mảng.

function countCharacter(){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(parseInt(arr[i]))){
            count++
        }
    }
    return count
}

let arr = [1,"23",25,"4","suck","%","2+5",2+5]
let numb = countCharacter(arr)
let length = arr.length

for (let i = 0; i < length; i++) {
    document.write(arr[i]+ "<br>")
}
document.write("<br>"+"The number of numeric characters in the arrays is: "+numb)