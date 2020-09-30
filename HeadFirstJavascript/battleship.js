do {
    var location1 = Math.floor(Math.random()*7);
}
while (location1 > 4 );

var location2 = location1 + 1;
var location3 = location2 + 1;
alert("locations are " + location1 + location2 + location3);
var guess;
var numberOfGuesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk == false){

   

    while (hits < 3) {

        var guess = prompt("Guess location");
        numberOfGuesses += 1;

    switch (true) {

        case guess == location1:
        hits += 1;
        alert("number of hits" + hits);
        break;
       
        case guess == location2:
        hits += 1;
        alert("number of hits" + hits);
        break;
   
        case guess == location3:
        hits += 1;
        alert("number of hits" + hits);
        break;

        
    }

   
    }

    isSunk = true
    alert("ship has sunk");
    alert("number of guesses" + numberOfGuesses);
    



}
