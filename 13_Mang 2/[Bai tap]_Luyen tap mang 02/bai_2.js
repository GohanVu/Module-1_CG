//Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ]
// sau khi thực hiện đảo ngược sẽ là "162csc"

let arr = ['c','s','c','2','6','1']
let first = 0
let last = arr.length-1
let b
for (let i = 0; first < last; i++) {
    b = arr[first]
    arr[first] = arr[last]
    arr[last] = b
    first++
    last --
}
document.write(arr.join(''))