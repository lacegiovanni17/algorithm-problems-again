function vowelsVsConsonants(str) {
  // Write your code below this line

  var knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowels = 0;
  var consonants = 0;

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];

    if (knownVowels.includes(letter)) {
      vowels += 1;
    } else {
      consonants++;
    }
  }

  if (vowels === consonants) {
    return "draw";
  } else if (vowels > consonants) {
    return "vowels win";
  } else {
    return "consonants win";
  }
}

export default vowelsVsConsonants;
