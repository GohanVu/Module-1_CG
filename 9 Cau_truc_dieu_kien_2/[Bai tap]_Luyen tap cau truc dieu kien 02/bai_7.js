function solveSecondDegreeEquation(a,b,c){
    let delta = b*b - 4*a*c
    let x1,x2;
    if(delta>0) {
        x1 = (-b +Math.sqrt(delta))/ (2*a);
        x2 = (-b -Math.sqrt(delta))/ (2*a);
        return [x1,x2];
    } else if (delta===0){
        x1 = -b/(2*a);
        return [x1]
    } else {
        return "The equation has no real solutions"
    }
}

let a= 1
let b = -3
let c = 2
let result = solveSecondDegreeEquation(a,b,c)
console.log(result)