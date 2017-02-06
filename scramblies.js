function scramble(str1, str2) {

  var diff = str1.length - str2.length;
  for (count=0; count<str2.length; count++) {
    if ((str1).includes(str2[count])) {
      str1 = str1.replace(str2[count], '');
    }
  }
  return str1.length === diff ? true : false;
}

scramble('cedewaraaossoqqyt','codewars');
