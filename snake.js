/*add variables that i need*/
//add the canvas
var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

// the unity of background
const unity = 20;


// create the snake

let snake = [{
    x :  5*unity,
    y :  5*unity
}];
//generate the food

console.log(star)

// create the score var

let score = 0;

/*function that allows me to know the directio of the snake*/

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
     /*create the game*/
function draw(){
    /*draw elements of the game*/
    //add the background

     const groundSnake = new Image();
     groundSnake.src = "img/background.jpg";
     ctx.drawImage(groundSnake,0,0);
    
     //add the food: the star image
       const starImg = new Image();
       starImg.src = "img/star.jpg";
      ctx.drawImage(starImg, star.x, star.y)
    

    //draw the snake
    for (let i=0;i<snake.length;i++){
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(snake[i].x, snake[i].y, unity, unity)}
   /*make your snake move*/
   //first create a new head depend on wich case is the direction
   let snakeNewheadX=snake[0].x
   let snakeNewheadY=snake[0].y
   
   switch(direction) {
    case "LEFT":
        snakeNewheadX -= unity
         break;
    case "RIGHT":
        snakeNewheadX += unity
         break;
    case "UP":
        snakeNewheadY -= unity;
         break;
    case "DOWN":
        snakeNewheadY += unity;
         break;

   }
    
  //add the new head to the snake
  
  if(snakeNewheadX==star.x&&snakeNewheadY==star.y){
      //addscore
      score++
      //addsound
      //generete new food = 
    }
  
  else{
  snake.pop()}
  
let newHead = {
        x : snakeNewheadX,
        y : snakeNewheadY
    }
snake.unshift(newHead)
   /*when the game over*/
   

  //add the text score
  ctx.fillStyle = "black";
  
  ctx.fillText(score,unity,unity)


}

let justPlay = setInterval(draw,100);