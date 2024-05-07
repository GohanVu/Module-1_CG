// Su dung vong lap for
let sout ;
sout =  "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (let i =1; i<=10; i++){
    sout = sout + "<tr>"
    for(let j =1 ; j <= 10 ; j++){
        sout = sout + "<td>" + i*j + "</td>"
    }
    sout = sout + "</tr>"
}
sout = sout + "</table>"
document.write(sout)

// Su dung vong lap while
// let draw
// draw = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// let i = j = 1 ;
// while (i<=10){
//     draw = draw + "<tr>"
//     while ( j<=10){
//         draw = draw + "<td>" + i*j +"</td>"
//         j++
//     }
//     draw = draw + "</tr>"
//     j = 1
//     i++
// }
// draw = draw + "</table>"
// document.write(draw)