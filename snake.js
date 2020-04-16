
//add the canvas
var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

// the unity of canvas
const unity = 20;
// create the snake

let snake = [{
    x :  5*unity,
    y :  5*unity
}];

// create the score var
let score = 0;

/*function that allows me to know the direction of the snake*/

let direction;

document.addEventListener("keydown",path);

function path(event){
    
    let key = event.which;
    if (key == 37||key== 81 && direction!= "RIGHT"){
        direction = "LEFT";
    }else if(key == 38 || key== 90  && direction != "DOWN"){
        direction = "UP";
    }else if(key == 39 ||key== 68 && direction!= "LEFT"){
        direction= "RIGHT";
    }else if(key == 40 ||key== 83 && direction!=  "UP"){
        direction= "DOWN";
    }
}

//Generate the background
const background = new Image();
background.src = "img/background.jpg";

//generate the star and the bombe
    const starImage = new Image();
    starImage.src = "img/star.jpg";
    const bombeImage = new Image();
    bombeImage.src = "img/bombe.jpg";

    var star = {
        x : Math.floor(Math.random()*25) *unity,
        y : Math.floor(Math.random()*20+5) *unity
    }
    var bombe = {
        x : Math.floor(Math.random()*25) *unity,
        y : Math.floor(Math.random()*20+5) *unity
    }

    // cheack winding

function winding(newHead,snake){
    for(let i = 0; i < snake.length; i++){
        if(newHead.x == snake[i].x && newHead.y == snake[i].y){
            return true;
        }
    }
    return false;
}

     /*create the game*/


function draw(){
    //draw the background
    ctx.drawImage(background,0,0);

    //draw the snake
    for (let i=0;i<snake.length;i++){
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(snake[i].x, snake[i].y, unity, unity)}
    // draw the star and bombe
    ctx.drawImage(starImage, star.x, star.y);
    ctx.drawImage(bombeImage, bombe.x, bombe.y);

   /*make your snake move*/
   //first create a new head depend on wich case is the direction
   let snakeNewheadX=snake[0].x
   let snakeNewheadY=snake[0].y
// generate move sound
        let move = new Audio();
        move.src = "audio/move.mp3";
   switch(direction) {
    case "LEFT":
        snakeNewheadX -= unity
        move.play();
         break;
    case "RIGHT":
        snakeNewheadX += unity
        move.play();
         break;
    case "UP":
        snakeNewheadY -= unity;
        move.play();

         break;
    case "DOWN":
        snakeNewheadY += unity;
        move.play();
         break;
   }
    
  //add the new head to the snake
  
  if(snakeNewheadX==star.x&&snakeNewheadY==star.y){
      //addscore
      score++
      //addsound when the snake eat food
      let eat = new Audio();
          eat.src = "audio/eat.wav";
          eat.play();
      //generete new star
      star = {
        x : Math.floor(Math.random()*25) * unity,
        y : Math.floor(Math.random()*20+5) * unity
    }
    }
  
  else{
  snake.pop()}
  
let newHead = {
        x : snakeNewheadX,
        y : snakeNewheadY
    }

   /*when the game over*/
   if(snakeNewheadX < 0 || snakeNewheadX ==25 * unity || snakeNewheadY < 5*unity || 
    snakeNewheadY == 25*unity || winding(newHead,snake)
     ||  (snakeNewheadX == bombe.x && snakeNewheadY == bombe.y)){
    clearInterval(justPlay);
    // add sound of dead
    let dead = new Audio();
        dead.src = "audio/dead.mp3";
        dead.play();
}
snake.unshift(newHead)
  //add the text score
  ctx.fillStyle = "black";
  ctx.fillText(score,24*unity,3*unity)
  //maxscore
  let maxScore=localStorage.getItem("maxScore");
  if (maxScore!=null)
  {
  if(score>parseInt(maxScore)){
    localStorage.setItem("maxScore",score)
    
    
  }}
  else
  {localStorage.setItem("maxScore",score);}

  ctx.fillStyle = "black";
  ctx.font = "30px Ariel"
  ctx.fillText("the max score is :"+maxScore,24*unity,4*unity);
}

var justPlay = setInterval(draw,100);