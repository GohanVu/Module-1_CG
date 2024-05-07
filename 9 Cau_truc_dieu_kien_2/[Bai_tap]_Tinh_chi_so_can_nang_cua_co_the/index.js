function calculatorFunc(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = weight / (height*height)
    if (bmi < 18){
        result = "Underweight";
    } else  if (bmi < 25.0) {
        result = "Normal";
    } else if (bmi < 30.0){
        result ="Overweight";
    } else {
        result = "Obese"
    }

    document.getElementById("result").innerText="Result: " +result

}
