function My_function(){
    let input_math = document.getElementById("math").value
    let input_physic = document.getElementById("physic").value
    let input_chemistry= document.getElementById("chemistry").value

    let math = parseFloat(input_math)
    let chemistry =parseFloat(input_chemistry)
    let physic = parseFloat(input_physic)

    let avg = (math + chemistry + physic)/3
    let total = math + chemistry + physic

    let avg_round = Math.round(avg*10)/10

    document.write("Diem toan: "+ math+"<br>")
    document.write("Diem ly: "+ physic+"<br>")
    document.write("Diem hoa: "+ chemistry+ "<br>")
    document.write("Tong diem ba mon la: "+ total +"<br>")
    document.write("Diem trung binh la:" + avg_round)
}
