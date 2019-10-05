
//User Guess Options
var character = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//Random Letter Generator
var randomIndex= Math.floor(Math.random() * character.length);
var cpuRandomLetter= character[randomIndex];
console.log(cpuRandomLetter)


var winScore = 0;
var lossScore = 0;
var guessRemaining = 9;
var guessedLetters = [];
var userGuess = event.key;

//lossScore / winScore
for(i=0; i<9; i++)
    math.subtract(guessRemaining[i]){
        console.log(i)
    }
if (document.getElementById(userGuess).value = cpuRandomLetter){
    add(1 + winScore)
}
//Guesses Left
var updateGuessesLeft = function() {
    document.querySelector('#guessRemaining').innerHTML = "Guesses Left: " + guessRemaining;
};
//reset

var reset = function(){
    totalGuesses = 9;
    guessesRemaining = 9;
    guessedLetters = [];

    updateletterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();
 
 //Letters Guessed
 function myFunction() {
  var userGuess = document.getElementById("guessedLetters").value;
  document.getElementById("demo").innerHTML = x;
}

document.getElementById('submit').onclick=function(){

}
          
 

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

 //   }
// }



         
                

   
   
    















