const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"]; //array that defines vowels
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  //loops through each character to see if it's a vowel and changes everything to lowercase. If a character is a vowel count is incremented by 1.
  return count;
};

// function that counts the number of characters in a string

const getCharacterCount = (string) => {
  const str = string;
  const length = str.length;
  return length;
};

//Outputs

console.log(getCharacterCount("Hola mundo!")); //Output: 11

console.log(countVowels("Sequoia")); //Output: 5

console.log(countVowels("Queue")); //Output: 4
