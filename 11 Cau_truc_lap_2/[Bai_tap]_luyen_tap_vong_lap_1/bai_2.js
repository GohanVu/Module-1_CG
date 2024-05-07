//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
// Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
// Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

let safeTemp = +prompt("Enter you temp you want")

while (safeTemp>100 ){
    safeTemp = +prompt("To high, please turn down")
}

while (safeTemp < 20){
    safeTemp = +prompt("To low, please turn on")
}
alert("Successfully")