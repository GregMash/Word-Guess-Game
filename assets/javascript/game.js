var wordArray = ["christmas", "elf", "santa", 'holiday', 'tree', 'jesus', 'red', 'green', 'presents'];
var wins = 0;
var losses = 0;
var wrongLetters = [];
var guessesLeft = 10;
var currentWord = [];
var answerArray = [];


var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
currentWord.push(randomWord.toLowerCase());
console.log(randomWord);

var ranWordLetters = randomWord.split("");
console.log(ranWordLetters);

var numLetters = ranWordLetters.length;
console.log(numLetters);

for (i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray);

var s = answerArray.join(" ");
console.log(s);





document.onkeyup = function (event) {
    var userGuess = event.key;
    answerArray.push(userGuess)

    if (userGuess == ranWordLetters) {
        answerArray = true;
        console.log(answerArray);
   

    }
   
    //else (
    //answerArray.push(userGuess.toLowerCase()));

//for (var i = 0; i < numLetters; i ++) {
    //if(currentWord[i] ==)
//}

    





    document.getElementById("wins").innerHTML = "Wins:  " + wins;
    document.getElementById("current-word").innerHTML = "Current Word";
    document.getElementById("game").innerHTML = s;
    document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining:  " + guessesLeft;
    //document.getElementById("letters-guessed").innerHTML = "Letters guessed:  " + lettersGuessed;


}


