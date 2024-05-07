function calculator (){
    let firstNumber = +document.getElementById("input_1").value;
    let secondNumber = +document.getElementById("input_2").value;
    let operator = document.querySelector("input[name='operator']:checked").value
    let result ;

    switch (operator){
        case "Add(+)":
            result = firstNumber + secondNumber ;
            break;
        case "Sub(-)":
            result = firstNumber - secondNumber;
            break;
        case "Multi(*)":
            result = firstNumber * secondNumber;
            break;
        case "Divi(/)":
            result =firstNumber / secondNumber ;
            break;
    }
    document.getElementById("Result").innerText = "Result: "+ result
}
