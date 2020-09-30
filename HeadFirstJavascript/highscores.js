var scores = [99,60,75,25,63,28,45,85,96,14,22,1,99,98,65,32,21,54,65,87,45,56,12,99,23,56,89,45,12,20,85,96,35,78,14,12];


function printAndGetHighscore(scores) {

var highscore = 0;
var output;

for(i=0; i < scores.length; i++){
output = "Bubble solution # " + i + " : " + scores[i];
console.log(output);

if (scores[i] >= highscore) {
    highscore = scores[i];
}

}

return highscore;

}

function getBestResults(scores, highscore) {
    var bestSolutions = [];
for(i=0; i < scores.length; i++){

    if (scores[i] == highscore) {
        bestSolutions.push(i);
    }

}

return bestSolutions;
}

var highscore = printAndGetHighscore(scores);
var bestSolutions = getBestResults(scores, highscore);

console.log("Bubble tests: " + scores.length);
console.log("Highest Bubble scores: " + highscore);
console.log("highest scores: " + bestSolutions);
