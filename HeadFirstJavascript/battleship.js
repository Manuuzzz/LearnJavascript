var location1 = 0;

do {
    location1 = Math.floor(Math.random()*7);}
while (location1 > 4 );
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess = prompt("Guess location");
alert(location1);
alert(location2);
alert(location3);
