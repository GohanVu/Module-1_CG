function checkStar(n){
    let star =         ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"]
    let constellation =["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"]
    let result ="" ;
    for (let i = 0; i < star.length; i++) {
        if(n == star[i]){
            result = constellation[i]
            break;
        }
    }
    if (result === ""){
        result = "Not find it"
    }
    return result;
}
let input = prompt("Enter the star you want: ")
let output = checkStar(input)
document.write(output)
