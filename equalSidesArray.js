//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
function findEvenIndex(arr){
  var before;
  var sum;
  for (count = 0; count<arr.length; count++) {
    if (count === 0) {
      before = 0;
    } else {
      before = arr.slice(0, count);
      sum = before.reduce(function(a, b) {
          return a + b;
      }, 0);
    }
    console.log('before ' + before);
    console.log('num ' + arr[count]);
    console.log(sum);
  }
}

findEvenIndex([1,2,3,4,3,2,1]);
