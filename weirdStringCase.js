function toWeirdCase(string) {
    str = string.trim();
    var arr = [];
    for (count = 0; count < str.length; count++) {
        if (count % 2 === 0) {
          arr.push(str[count].toUpperCase());
        } else {
          arr.push(str[count].toLowerCase());
        }
    }
    return arr.join('');
}


toWeirdCase('This is a test');
