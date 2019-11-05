var iniScore1 = 0;
var iniScore2 = 0;
var maxScore = 0;

// selecting form and playing
var playingTo = document.getElementById('playing');

var input = document.getElementById('inputNumber');
input.addEventListener('keyup', function(e){
 var y =  playingTo.innerText =Number(e.target.value) ;
 maxScore = y;
  
});
 


// select game over

var gameOver = document.getElementById('gameOver');

// selecting score of player
var scoreFirst = document.getElementById('scoreFirst');
var scoreScond = document.getElementById('scoreSecond');


// selecting player one and implementing

var btn1 = document.getElementById('playerOne');
 btn1.addEventListener('click', function(){
    playerOneGame(); 
  });
// selecting player two and implementing

var btn2 = document.getElementById('playerTwo');
btn2.addEventListener('click', function(){
    playerTwoGame(); 
  });
// reset the game 

var btn3 = document.getElementById('reset');

btn3.addEventListener('click', reset);

// function player one 
function playerOneGame(){
  if(iniScore1 <= maxScore){
   
    if(iniScore1 === maxScore){
      scoreFirst.classList.add('scoreFirst');
       iniScore1 = maxScore;
       gameOver.classList.add('showGameOver');
       btn2.disabled = true;
       
    }
    scoreFirst.textContent = iniScore1++;
  } 
}

// function player two
function playerTwoGame(){
  if(iniScore2 <= maxScore){
     if(iniScore2 === maxScore){
      scoreScond.classList.add('scoreSecond');
       iniScore2 = maxScore;
       gameOver.classList.add('showGameOver');
       btn1.disabled = true;
    }
    scoreSecond.innerText = iniScore2++;
  }
  
}

// reset function

function reset(){
  iniScore1 = 0;
  iniScore2 = 0;
  maxScore = 0;
  playingTo.innerText = maxScore;
   scoreFirst.textContent = iniScore1;
   scoreScond.textContent = iniScore2;
   scoreFirst.classList.remove('scoreFirst');
   scoreScond.classList.remove('scoreSecond');
   gameOver.classList.remove('showGameOver');
   input.value = '';
   btn2.disabled = false;
   btn1.disabled = false;
  
  
}



