function countChar(word, char)  {

    let wordlength = word.length;
    let counter = 0;
    let character = char;
   
    for (x = 0; x < wordlength; x++)    {
        if (word[x] === character) {
        counter ++;
    }
    }
console.log(counter);
}

countChar("BBC","C");

/*
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
*/