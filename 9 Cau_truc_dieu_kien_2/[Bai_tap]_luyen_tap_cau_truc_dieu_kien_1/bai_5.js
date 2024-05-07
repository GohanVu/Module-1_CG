
function calculatorMark(exam,midTest,finalTest){
    let avg = (exam + midTest + finalTest) /3
    return avg ;
}

let examScore = +prompt("Enter your exam score: ");
let midTestScore = +prompt("Enter your mid test score: ");
let finalTestScore = +prompt("Enter your final test score: ");

let avgScore = calculatorMark(examScore,midTestScore,finalTestScore);

if (avgScore >= 8.5){
    alert("Excellent student")
} else if (avgScore >=7){
    alert("Good student")
} else if (avgScore >= 5){
    alert("Satisfactory student");
} else {
    alert("Average student")
}