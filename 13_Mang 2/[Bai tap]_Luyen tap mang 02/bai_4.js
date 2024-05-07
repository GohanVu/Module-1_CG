//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi

function countWords (n){
    let words = n.split(' ')
    return words.length
}

let string = prompt("Type here")
let totalCount = countWords(string)
document.write("The number of words in a string: <br>"+ string +" : "+totalCount)