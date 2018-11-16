
let size = 16;

for (let x=0; x<=size-1; x++) {
let output = "";


    for (let y=0; y<=(size/2)-1; y++) {

        if (x % 2 == 0) {
         output += " X";
       
       
    }       else  {
        output += "X ";
 
    }
    }
    console.log(output+"\n");
}