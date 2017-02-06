function scramble(str1, str2) {
  var arr1 = str1.split('').sort('').join('');
  var arr2 = str2.split('').sort('').join('');
  console.log(arr1);
  for (count=0; count<arr2.length; count++) {
    if ((arr1).includes(arr2[count])) {
      var replaced = arr1.replace(arr2[count], '');
      console.log(replaced);
    }
  }
  console.log(arr1);
}

scramble('cedewaraaossoqqyt','codewars');
// scramble('codewarsssss','codewars');
