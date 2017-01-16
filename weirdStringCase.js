function toWeirdCase(string) {
    arr = string.split(' ');
    weirdArray = [];
    arr.forEach(word => {
        for (count = 0; count < word.length; count++) {
            if (count % 2 === 0) {
                weirdArray.push(word[count].toUpperCase());
            } else {
                weirdArray.push(word[count].toLowerCase());
            }
        }
        weirdArray.push(' ');
    });
    weirdArray.splice(weirdArray.length -1, 1);
    return weirdArray.join('');
  }

toWeirdCase('This is a test');
