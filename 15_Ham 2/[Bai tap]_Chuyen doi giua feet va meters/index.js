function changeFtoM (feetValue){
    feetValue = parseFloat(feetValue)
    document.getElementById('outputMeter').innerHTML = (0.305 * feetValue) + " (m)"
}

function changeMtoF(meterValue){
    meterValue = parseFloat(meterValue)
    document.getElementById("outputFeet").innerHTML = (3.279 * meterValue)+ " (ft)"
}