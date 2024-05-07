function classification (score){
    if( score >= 8) {
        return "A"
    }
    else if (score <=5){
        return  "C"
    } else {
        return  "B"
    }
}

function rankStudent(array) {
    let count=[0,0,0]
    for (let i = 0; i < array.length; i++) {
        if (classification(array[i])==="A"){
            count[2]++
        } else if(classification(array[i])==="C"){
            count[0]++
        } else {
            count[1]++
        }
    }
    return count
}

let scoreStudent = [5,6,7,8,9,2,4,5,7,8,7,9,10]
let result = rankStudent(scoreStudent)
document.write("Student rank A: "+ result[2]+"<br>")
document.write("Student rank B: "+result[1]+"<br>")
document.write("Student rank C: "+result[0]+ "<br>")

function calculateAverage (array){
    let sum =0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum/array.length).toFixed(2)
}
let avgScore = calculateAverage(scoreStudent)
document.write("Average Score: "+avgScore)