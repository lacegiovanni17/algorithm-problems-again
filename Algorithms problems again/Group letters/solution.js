function groupLetters(word) {
  const knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowels = "";
  let consonants = "";

  for (const letter of word) {
    if (knownVowels.includes(letter)) {
      vowels += letter;
    } else {
      consonants += letter;
    }
  }

  return vowels + consonants;
}

export default groupLetters;
