function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.split(/[aeiou]/gi).length - 1;
  return vowelsCount;
}

getCount("abracadabra");
