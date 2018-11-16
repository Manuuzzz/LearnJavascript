let x = 1;

for (x = 1; x <=100; x++)   {
let word = "";
let printNumber = new Boolean(true);


if ( x % 3 == 0) {
    word = word + "Fizz";
    printNumber = false;
}

 if ( x % 5 == 0) {
    word = word + "Buzz";
    printNumber = false;
} 

 if (printNumber) {
     console.log(x);
 } else console.log(word);
}

/*

better solution:

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/