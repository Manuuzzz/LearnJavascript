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