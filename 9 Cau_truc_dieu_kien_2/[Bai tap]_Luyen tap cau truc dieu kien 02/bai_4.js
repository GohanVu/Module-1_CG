function calculateArea(length,width){
    return length*width
}

let length;
    do{
         length =+prompt("Enter side length ")
    } while (isNaN(length) || length <= 0)

let width ;
    do{
        width = +prompt("Enter side width ")
    } while (isNaN(width) || width<= 0)



alert("Area is: "+ calculateArea(length,width))