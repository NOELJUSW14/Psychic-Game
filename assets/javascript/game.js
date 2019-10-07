alert("Guess what letter I'm thinking?")
//User Guess Options
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//Game set up
var winScore = 0;
var lossScore = 0;
var guessRemaining = 9;
var guessedLetters = [];
let reset = function(){
  guessesRemaining = 9;
  guessedLetters = [];
  console.log(cpuRandomLetter)
}

//Random Letter Generator
var randomIndex= Math.floor(Math.random() * alphabet.length);
var cpuRandomLetter= alphabet[randomIndex];
console.log(cpuRandomLetter)

//WinScore,LossScore, GuessRemaining
document.onkeydown = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  
  if(userGuess===cpuRandomLetter){
    document.getElementById(`winScore`).innerHTML = winScore++;
    document.getElementsByClassName("counter").innerHTML = reset;
    alert("Wow! You're Psychic!")
    
  } else{
    for( i=0; i>9; i++);
    document.getElementById(`guessRemaining`).innerHTML = guessRemaining--;
    alert("Try again!");
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    guessedLetters.push(userGuess);
    
  }

  if(guessRemaining >= 0){
    document.getElementById(lossScore).innerHTML = lossScore++;
    document.getElementsByClassName("counter").innerHTML = reset;
    alert("Start Over.")
  }
}

//document.getElementById('submit').onclick=function(){
  //  console.log("click")
//}
//lossScore / winScore
//for(i=0; i<9; i++)
   
// if (document.getElementById(userGuess).value = cpuRandomLetter){
 //   add(1 + winScore)
// }
//Guess History
//onkeydown., print display, limit 9 letters

//for(i = 0;i<9, i++){
 //   if(randomLetter == userGuess){
    //    add(1 + winScore)
  //  } else {
 //       add(1 + guessRemaining)
 //   function(lossScore){
 //       if(guessRemaining>=9){
 //       add(1+lossScore)
 //   }
// }
// document.getElementById('lossScore')