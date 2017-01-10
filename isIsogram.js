function isIsogram(str) {
    var lowerCase = str.toLowerCase();
    var split = lowerCase.split('');
    var sort = split.sort();
    var bool = '';

    if (sort.length === 0) {
      bool = true;
    } else {
      for (count = 0; count < sort.length -1; count++) {
        if (sort[count] === sort[count+1]) {
          bool = false;
          break;
        } else {
          bool = true;
        }
      }
    }
    return bool;
}

isIsogram("");


// Better Solution
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
