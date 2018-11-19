function countBs(word)  {

    let wordlength = word.length;
    let counter = 0;
   
    for (x = 0; x < wordlength; x++)    {
        if (word[x] ==="B") {
        counter ++;
    }
    }
console.log(counter);
}

countBs("BBC");