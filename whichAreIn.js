function inArray(array1,array2){
var r = [];
  array1.sort('').forEach(substring => {
    array2.sort('').forEach(string => {
      if (string.includes(substring)) {
        r.push(substring);
      }
    });
  });
  console.log(r);

//   var newArray = []
//   for (count = 0; count<array2.length; count++) {
//     for (index = 0; index<array1.length; index++) {
//       if (array2[count].includes(array1[index])) {
//         newArray.push(array1[index]);
//       }
//     }
//   }
//   console.log(newArray);
}

inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);
