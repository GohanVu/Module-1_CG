let isPlayer1 = true;
let arr =[['','','',''],['','','',''],['','','',''],['','','','']]
// draw chessboard
function drawBoard(){
    let board = "<table width = '200px' height = '200px' border = '1'>"
    for (let i = 0; i < 4; i++){
        board += "<tr>"
        for (let j = 0; j < 4; j++) {
            board += "<th width='50px' height='50px'onclick='play(" +i +","+j+")'>" + arr[i][j]+ "</th>"
        }
        board += "</tr>"
    }
    board += "</table>"
    document.body.innerHTML = "";
    document.write(board);
}
// The game play. Tick X or O
function play (i,j){
    if (arr[i][j] == ""){
        if(!isPlayer1){
            arr[i][j] = "X";
            checkWin("X");
        } else {
            arr[i][j] = "O";
            checkWin("O")
        }
        // Switch player. If first move is O then next is X
        isPlayer1 = !isPlayer1;
        drawBoard()
    }
}
// Check winner
function  checkWin(char){
    //check main diagonal
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (arr[i][j]== char){
                if (arr[i+1][j+1]== char && arr [i+2][j+2]== char){
                    alert(char+ " is winner")
                    return;
                }
            }
        }
    }
    // check horizontal line
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
            if(arr[i][j]==char){
                if(arr[i][j+1]==char && arr[i][j+2]==char){
                    alert(char + " is winner")
                    return;;
                }
            }
        }
    }
    // check counter-diagonal
    for (let i = 0; i < 2; i++) {
        for (let j = 2; j < 4; j++) {
            if(arr[i][j]== char){
                if(arr[i+1][j-1]==char && arr[i+2][j-2]==char){
                    alert (char + "is winner")
                    return;
                }
            }
        }
    }
}