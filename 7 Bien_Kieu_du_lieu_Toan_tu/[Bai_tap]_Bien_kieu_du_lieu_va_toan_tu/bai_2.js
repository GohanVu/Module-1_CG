function convertTemp(){
    let input = parseFloat(document.getElementById("input").value)
    let convertTemp = (9*input/5)+32
    document.getElementById("result").innerHTML ='Nhiet do chuyen doi: '  + convertTemp

}