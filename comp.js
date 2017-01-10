function comp(array1, array2){

  var squared = array1.sort().map(x => Math.pow(x, 2));

  var same = squared.sort().every(function(element, index) {
    return element === array2.sort()[index];
  });

  return squared.length === 0 ? false : same;
}
comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]);
// comp([], [8281, 361, 6084, 3721, 1600, 3969]);
