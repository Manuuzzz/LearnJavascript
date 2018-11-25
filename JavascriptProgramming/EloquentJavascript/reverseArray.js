function reverseArray(array) {

    let newArray=[];

    for (i = array.length; i >=0; i--) {

        newArray.push(array[i]);

    }
console.log(newArray);
}


reverseArray(["A","B","C"]);

