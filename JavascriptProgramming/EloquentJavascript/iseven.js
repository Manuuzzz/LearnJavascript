function isEven(a) {

if (a < 0 ) {

    isEven(-a);
}

if (a ===0 || a - 2 === 0) {
    console.log("is even");
} else if (a >= 1 ) {
    if ( a === 1 ) {

        console.log("not even");
    } else {    isEven(a-2);

    } 
    
    

}}

    

isEven(-9);

/*
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

*/
