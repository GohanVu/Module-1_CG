let productList = [
    'Iphone13',
    'Iphone 6',
    'Iphone 7',
    'Iphone 8',
    'Iphone X'
];

function showAllProduct(){
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content +=`<tr>
                <td>${productList[i]}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
        </tr>`
    }
    document.getElementById("list").innerHTML = content;
    document.getElementById('number').innerHTML= productList.length + " products";
}
showAllProduct()

function createNew(){
    // Get data new product
    let newP= document.getElementById("newproduct").value;
    // add to array
    productList.push(newP);
    // Display
    showAllProduct();
    document.getElementById("newproduct").value= "";
    document.getElementById("newproduct").focus()
}