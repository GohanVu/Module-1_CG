//Bài 4: In hình chữ nhật

for (let i = 0; i < 7; i++) {
    if (i == 0 || i == 6){
        for (let j = 0; j < 21; j++) {
            document.write("*")
        }
    } else {
        document.write("*")
        for (let j = 0; j < 19; j++) {
            document.write("&nbsp;&nbsp;")
        }
        document.write("*")
    }
    document.write("<br>")
}

