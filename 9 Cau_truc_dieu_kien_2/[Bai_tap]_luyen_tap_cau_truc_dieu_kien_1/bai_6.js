let sellingAmount = +prompt("Enter your selling amount: ")
let commission  = 0 ;

if (sellingAmount <= 500000){ // doanh thu duoi 5tr
    commission = sellingAmount* 0.05;
} else if (sellingAmount < 1000000){ // doanh thu duoi 10tr
    commission = sellingAmount * 0.1;
} else {
    commission = sellingAmount * 0.15 // doanh thu tren 10tr
}
document.write("The commission you receive is: VND"+ commission)