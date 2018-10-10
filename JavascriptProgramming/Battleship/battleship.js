var location1;
var location2;
var location3;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {

guess = prompt("Guess a number from 1 to 6","");
if (guess < 0 || guess > 6) {
alert("Please enter a valid number");
} else {
guess = guess + 1;
}


}