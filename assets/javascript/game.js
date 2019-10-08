alert("Guess what letter I'm thinking?")
//User Guess Options
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//Game set up
var winScore = 0;
var lossScore = 0;
var guessRemaining = 8;
var guessedLetters = [ ];
var randomIndex= Math.floor(Math.random() * alphabet.length);
var cpuRandomLetter = alphabet[randomIndex];
console.log(cpuRandomLetter)

//Random Letter Generator

let startUp = function(){
randomIndex= Math.floor(Math.random() * alphabet.length);
cpuRandomLetter = alphabet[randomIndex];
winScore = 0;
lossScore = 0;
guessRemaining = 8;
guessedLetters = [ ];

document.getElementById("guessedLetters").innerHTML = guessedLetters;
document.getElementById("guessRemaining").innerHTML = guessRemaining;

console.log(cpuRandomLetter)
}

//WinScore,LossScore, GuessRemaining
document.onkeydown = function(event) {       
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  if(alphabet.indexOf(userGuess) === -1){
    alert('Select a letter please!!!')
    return
  }
  
  if(userGuess===cpuRandomLetter){
    document.getElementById(`winScore`).innerHTML = winScore++;
    alert("Wow! You're Psychic!")
  startUp()
    
  } else{
    document.getElementById(`guessRemaining`).innerHTML = guessRemaining--;
    alert("Try again!");
    guessedLetters.push(userGuess);
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
  }

  if(guessRemaining <= -1){
    document.getElementById(`lossScore`).innerHTML = lossScore++;
    alert("Sorry! You Lost!")
  startUp()
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