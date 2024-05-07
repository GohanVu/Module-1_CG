function isTriangle(a,b,c){
    if (a>0 &&b>0 && c>0 && a+b>c && b+c>a && a+c>b){
        return true
    } else {
        return false
    }
}

let  a=9
let b = 10
let c = 3

result = isTriangle(a,b,c)
console.log(result)