var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

// the unity of background
const unity = 25;

//backgound image
const groundSnake = new Image();
groundSnake.src = "img/ground.jpeg";
function draw(){
ctx.drawImage(groundSnake,0,0);
}
let ground = setInterval(draw,100);
// the star image
const starImg = new Image();
starImg.src = "img/star.jpg";
 
// create the snake

let snake = [{
    x : 12* unity,
    y : 12 * unity
}];


// create the score var

let score = 0;

//control the snake

let direction;

document.addEventListener("keydown",direction);

function path(event){
    let key = event.which;
    if( (key == 37 || key== 81) && direction != "RIGHT"){
        direction = "LEFT";
    }else if((key == 38 || key== 90) && direction != "DOWN"){
        direction = "UP";
    }else if((key == 39 || key== 68) && direction != "LEFT"){
        direction= "RIGHT";
    }else if((key == 40 || key== 83) && direction!=  "UP"){
        direction= "DOWN";
    }
}
