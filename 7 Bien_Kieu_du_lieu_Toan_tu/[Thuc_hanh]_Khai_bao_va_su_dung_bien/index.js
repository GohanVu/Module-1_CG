let a = prompt("Nhập số a")
let b = prompt("Nhập số b")

a = parseFloat(a)
b = parseFloat(b)

if (a % b === 0){
    alert(a+ " chia hết cho " + b)
}
else {
    alert(a+ " không chia hết cho " +b)
}