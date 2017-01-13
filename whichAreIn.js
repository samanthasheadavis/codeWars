function inArray(array1,array2){
var newArray = [];
  array1.sort('').forEach(substring => {
    array2.sort('').forEach(string => {
      if (string.includes(substring)) {
        newArray.push(substring);
      }
    });
  });
  r = newArray.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  return r;
}

inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);
