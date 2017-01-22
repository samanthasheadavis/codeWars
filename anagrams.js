function anagrams(word, words) {
  var anagramsArray = [];
  var anagram1 = word.split('').sort('').join('');
    for (i = 0; i < words.length; i++) {
      var anagram2 = words[i].split('').sort('').join('');
      if (anagram1 === anagram2) {
        anagramsArray.push(words[i]);
      }
    }
    return anagramsArray;
}
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
