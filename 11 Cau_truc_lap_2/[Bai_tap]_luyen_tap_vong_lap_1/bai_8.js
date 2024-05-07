function playGame() {
    let num = +prompt('Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu')
    let random = Math.floor(Math.random() * (num + 1))
    let numGuess = +prompt('Nhập số bạn đoán')
    let assignValue;
    let i;
    for (i = 0; i < 3; i++) {
        if (numGuess < random) {
            alert('Bạn đã đoán số bé hơn')
        }
        else if (numGuess > random) {
            alert('Bạn đã đoán số lớn hơn')
        }
        else if (numGuess === random) {
            alert('Chúc mừng bạn đoán đúng')
            document.write('Chúc mừng bạn đoán đúng')
            break
        }
        if (i === 2) {
            alert('Bạn đã hết số lần đoán')
        } else {
            assignValue = +prompt('Nhập số bạn đoán')
            numGuess = assignValue
        }
    }

}
playGame();