//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
function findEvenIndex(arr){
  var before;
  var after;
  for (count = 0; count<arr.length-1; count++) {
    if (count === 0) {
      before = 0;
    }
    console.log(arr[count]);
    before = arr[count - 1];
    console.log('before' + before);
  }
}

findEvenIndex([1,2,3,4,3,2,1]);
