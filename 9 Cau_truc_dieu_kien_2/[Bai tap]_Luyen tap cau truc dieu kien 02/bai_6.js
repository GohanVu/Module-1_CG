function solveLinearEquation (a,b){
    if (a===0){
        if (b===0){
            return "Infinity solution equation"
        } else {
            return "No solution equation"
        }
    } else {
        let x = -b/a;
        return  x;
    }
}

let a =2
let b = 4
let result = solveLinearEquation(a,b)
console.log(result)