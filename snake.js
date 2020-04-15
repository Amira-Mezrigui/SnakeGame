var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

// the unity of background
const unity = 20;

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
