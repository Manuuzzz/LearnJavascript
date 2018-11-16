var location1=1;
var location2=2;
var location3=3;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {

guess = prompt("Guess a number from 1 to 6","");
if (guess < 0 || guess > 6) {
alert("Please enter a valid number");
} else {
guesses = guesses + 1;
switch(true) {
case guess == location1:
hits = hits +1;
if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
    }
break;
case guess == location2:
hits = hits +1;
if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
    }
break;
case guess == location3:
hits = hits +1;
if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
    }
break;
default:
break;

}
}


}