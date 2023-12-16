// Assignment code here
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letters = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i",
 "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S",
"t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

lettersNumbers = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i",
"I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S",
"t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

lettersNumbersSymbols = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i",
"I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S",
"t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
"!", "@", "#", "$", "%", "&", "*"];

function generatePassword() {
  var createPassword = "";
  for (let i = 0; i < 8; i++) {
    console.log(createPassword += lowercase[(Math.floor(Math.random() * lowercase.length))]);
  }
  for (let i = 0; i < 8; i++) {
    console.log(createPassword += letters[(Math.floor(Math.random() * letters.length))]);
  }
  for (let i = 0; i < 8; i++) {
    console.log(createPassword += lettersNumbers[(Math.floor(Math.random() * lettersNumbers.length))]);
  }
  for (let i = 0; i < 8; i++) {
    console.log(createPassword += lettersNumbersSymbols[(Math.floor(Math.random() * lettersNumbersSymbols.length))]);
  }
  return createPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
