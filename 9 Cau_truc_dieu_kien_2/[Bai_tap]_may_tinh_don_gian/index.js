function clickButton(newValue){
    // lay du lieu tu input ra
    let bieu_thuc = document.getElementById("input").value;
    // them so 1 vao sau
    bieu_thuc+=newValue;
    //dien lai vao o input
    document.getElementById("input").value = bieu_thuc;
}

function getResult(){
    //lay du lieu tu o input ra
    let bieu_thuc = document.getElementById("input").value;
    // tinh toan bang eval
    let  result =eval(bieu_thuc);
    //
    document.getElementById("input").value = result;
}
