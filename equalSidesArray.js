//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
function findEvenIndex(arr) {
    var before;
    var after;
    var index;
    for (count = 0; count < arr.length; count++) {
        if (count === 0) {
            before = 0;
            after = arr.slice(count + 1, arr.length).reduce(function(a, b) {
                return a + b;
            }, 0);
        } else {
            before = arr.slice(0, count).reduce(function(a, b) {
                return a + b;
            }, 0);

            after = arr.slice(count + 1, arr.length).reduce(function(a, b) {
                return a + b;
            }, 0);
        }
        if (before === after) {
            index = count;
        }
    }
    if (index === undefined) {
      return -1;
    } else {
      return index;
    }
}


// findEvenIndex([1,2,3,4,3,2,1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
