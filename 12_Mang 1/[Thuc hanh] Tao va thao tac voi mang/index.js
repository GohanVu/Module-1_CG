let x = 0;
let array = Array();
function add_element_to_array(){
    array[x] = document.getElementById("txtValue").value;
    alert("Element "+array[x]+" added at index "+ x);
    x++;
    document.getElementById("txtValue").value =" "
}

function display_array(){
    let e = "<hr/>" ;
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i]+ "<br/>"
    }
    document.getElementById("result").innerHTML = e
}

// khoi tao x= index . arr=[]
// tao function add : arr[x] = getElement() -> alert -> x++ -> reset o nhap du lieu
// function display: tao dau ke ngang <hr> -> for () e+= hien thi / luu gia tri vao id="resut"  = e