function range(start, end) {

    let numbers=[];

    for (x = start; x <= end; x++) {

        numbers.push(x);
    }

    console.log(numbers);
}



range(1,10);

function sum(array) {

  
    let result = 0;
    for (let number of array) {

    result = result + number;
    

    }

   console.log(result);
}

sum([1,2,3,4,5,6,7,8,9,10]);
