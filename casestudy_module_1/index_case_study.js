let gameCanvas = document.getElementById('myCanvas')
let ctx = gameCanvas.getContext('2d')
let snakeDirection;
let gameOver = false;
let score = 0;
let highestScore = 0;
let eat = new Audio('eatSound.mp3')
let dead = new Audio('gameOverSound.mp3')
class Snake{
    constructor(speed, radius) {
        this.speed = speed;
        this.radius = radius ;
        this.array = [] ;
        this.intHeadSnake();
        this.drawHeadSnake();
        this.drawBodySnake();
    }
    setSpeed(newSpeed){
        this.speed = newSpeed;
    }
    setRadius(newRadius){
        this.radius = newRadius;
    }
    intHeadSnake(){
        this.array.push({x:8*30,y:8*30})
    }
    drawHeadSnake(){
        ctx.beginPath();
        ctx.arc(this.array[0].x,this.array[0].y,this.radius,0,2*Math.PI);
        ctx.fillStyle = '#002fff'
        ctx.fill();
        ctx.stroke();
    }
    drawBodySnake(){
        for (let i = this.array.length-1; i > 0 ; i--) {
            ctx.beginPath();
            this.array[i].x = this.array[i-1].x
            this.array[i].y = this.array[i-1].y;
            ctx.arc(this.array[i].x,this.array[i].y,this.radius/2,0,2*Math.PI);
            ctx.fillStyle = '#9a9a9a'
            ctx.fill();
            ctx.stroke();
        }
    }
    resetSnake(){
        this.array =[]
        this.intHeadSnake();
        snakeDirection = undefined;
    }
}
let mySnake = new Snake(10,10);
class Food {
    constructor(radius) {
        this.radius = radius;
        this.createFood();
        this.drawFood();
    }
    createFood(){
        this.x = Math.floor(Math.random()*101)*3;
        this.y = Math.floor(Math.random()*101)*3;
    }
    drawFood(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = '#2eff00';
        ctx.fill();
        ctx.stroke();
    }
    resetFood(){
        this.createFood();
    }
}
let myFood = new Food(8);
class SnakeGamePlay {
    static logic(event){
        if (event.keyCode==37 && snakeDirection !='turnRight'){
            snakeDirection = 'turnLeft'
        }
        else if (event.keyCode == 38 && snakeDirection != 'goDown'){
            snakeDirection = 'goUp'
        }
        else if (event.keyCode == 39 && snakeDirection != 'turnLeft'){
            snakeDirection = 'turnRight'
        }
        else if (event.keyCode == 40 && snakeDirection != 'goUp'){
            snakeDirection = 'goDown'
        }
        else if (event.keyCode == 32 && gameOver){
                SnakeGamePlay.resetGame();
        }
    }
    static keyDirection(){
        if (snakeDirection == 'turnLeft'){
            mySnake.array[0].x -= mySnake.speed;
        }
        if (snakeDirection == 'turnRight'){
            mySnake.array[0].x += mySnake.speed;
        }
        if (snakeDirection == 'goDown'){
            mySnake.array[0].y += mySnake.speed;
        }
        if (snakeDirection == 'goUp'){
            mySnake.array[0].y -= mySnake.speed;
        }
    }
    static eatFood(){
        if (Math.abs(mySnake.array[0].x - myFood.x) <=15 && Math.abs(mySnake.array[0].y -myFood.y)<=15){
            score++;
            eat.play();
            mySnake.array.push({x:myFood.x,y:myFood.y})
            myFood.createFood();
            if (score >= highestScore){
                highestScore = score;
                document.getElementById('highestScore').innerHTML = 'Highest Score: '+highestScore;
                document.getElementById('externalScore').style.color = '#a6f375'
            } else {
                document.getElementById('externalScore').style.color ='#525151'
            }
        }
    }
    static checkScore(){
        document.getElementById('score').innerHTML = 'Score: '+ score;
        document.getElementById('externalScore').innerHTML = 'Score: '+ score;
    }
    static startGame(){
        ctx.clearRect(0,0,360,360)
        mySnake.drawHeadSnake();
        mySnake.drawBodySnake();
        myFood.drawFood();
        SnakeGamePlay.keyDirection();
        SnakeGamePlay.eatFood();
        SnakeGamePlay.checkScore();
        GameOverCheck.hitBodyCheck();
        GameOverCheck.hitWallCheck();
        TextDisplay.hideText();

    }
    static resetGame(){
        TextDisplay.hideText();
        clearInterval(game);
        mySnake.resetSnake();
        myFood.resetFood();
        score=0;
        this.checkScore();
        document.getElementById('externalScore').style.color = '#525151'
        game = setInterval(SnakeGamePlay.startGame,100);
        gameOver = false;
    }
}
class GameOverCheck{
    static hitBodyCheck(){
        for (let i = 2; i < mySnake.array.length ; i++) {
            if(mySnake.array[0].x == mySnake.array[i].x && mySnake.array[0].y == mySnake.array[i].y){
                dead.play();
                setTimeout(()=>{
                    clearInterval(game);
                    TextDisplay.showText()
                    gameOver = true;
                }, 50)
            }
        }
    }
    static hitWallCheck(){
        if (mySnake.array[0].x<7 || mySnake.array[0].x > 360-7
           || mySnake.array[0].y < 7 || mySnake.array[0].y > 360-7){
            dead.play();
            setTimeout(()=>{
                clearInterval(game);
                TextDisplay.showText()
                gameOver=true;
            },50)
        }
    }
}
class TextDisplay {
    static hideText(){
        document.getElementById('score').style.display = 'none'
        document.getElementById('highestScore').style.display = 'none';
        document.getElementById('gameOverText').style.display = 'none';
        document.getElementById('PlayAgainInstruction').style.display = 'none';
    }
    static  showText(){
        document.getElementById('score').style.display = 'block';
        document.getElementById('highestScore').style.display = 'block';
        let gameOverText = document.getElementById('gameOverText');
        let playAgainInstruction = document.getElementById('PlayAgainInstruction');
        if (gameOverText && playAgainInstruction){
            gameOverText.style.display = 'block';
            gameOverText.innerHTML = 'Game Over!';
            playAgainInstruction.style.display = 'block'
            playAgainInstruction.innerHTML= 'Press Space play again'
        }
    }
}
document.addEventListener('keydown',SnakeGamePlay.logic)

let game = setInterval(SnakeGamePlay.startGame,100)
// function  startGameOnClick(){
//     TextDisplay.hideText();
//     game = setInterval(startGame,100)
// }