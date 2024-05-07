
let arr = [1,2,3,4,5,6,7];
let first = 0;
let last = arr.length-1;

while (first< last){
    let b = arr[first];
    arr[first] = arr[last];
    arr[last] = b ;
    first++ ;
    last -- ;
}
console.log(arr.join(""))