//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

//      Shape 1
// for (let i = 1 ; i <=  5; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

//     Shape 2
// for (let i = 5 ; i > 0 ; i--) {
//     for (let j = 0; j < i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


//    Shape 3
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < (5-i); j++) {
//         document.write("&nbsp;&nbsp")
//     }
//     for (let j = 0; j < i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

//     Shape 4
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        document.write("&nbsp;&nbsp");
    }
    for (let j = 0; j < (5-i) ; j++) {
        document.write("*")
    }
    document.write("<br>")
}