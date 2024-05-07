// function changedMoney() {
//     let Amount =parseFloat(document.getElementById("amount").value);
//     let From = document.getElementById("fromCurren").value;
//     let To = document.getElementById("toCurren").value;
//     let result;
//
//     if (From == "USD" && To == "VND") {
//         result = "Result: " + (Amount * 23000) + " VND"
//     } else if (From == 'VND' && To == "USD") {
//         result = "Result: " + (Amount / 23000) + " USD"
//     } else if (From == "VND"  ) {
//         result = "Result: " + Amount + " VND"
//     } else {
//         result = "Result: " + Amount + "USD"
//     }
//
//     document.getElementById("Result").innerHTML = result;
//
// }

// Cách 2: Cải tiến hơn
function changedMoney(){
    const amount =parseFloat(document.getElementById("amount").value)
    const From = document.getElementById("fromCurren").value
    const To = document.getElementById("toCurren").value
    const exChangeRate ={
        "USD":{
            "VND":23000,
            "JYP":110.25,
            "USD":1
        },
        "VND":{
            "USD":0.00004347826,
            "JYP":0.0053,
            "VND":1
        },
        "JYP":{
            "USD":0.009063444108,
            "VND":187.5,
            "JYP": 1
        }
    }
    const exChangeRates = exChangeRate[From][To]
    const convert = amount * exChangeRates

    document.getElementById("Result").innerHTML= amount+ " "+From + " thì sẽ bằng "+ convert +" "+ To
}
