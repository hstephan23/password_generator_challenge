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

function pushMenu() {
  document.getElementById("overlay").style.display = "flex";
}

function menuDisappear() {
  document.getElementById("overlay").style.display = "none";
}
function generatePassword() {
  var createPassword = "";
  var passwordLength = 0;
  selectedOption = "";
  if (selectedOption === "lowercaseLetters") {
    for (let i = 0; i < passwordLength; i++) {
      console.log(createPassword += lowercase[(Math.floor(Math.random() * lowercase.length))]);
    }
  }
  else if (selectedOption === "Letters") {
    for (let i = 0; i < passwordLength; i++) {
      console.log(createPassword += letters[(Math.floor(Math.random() * letters.length))]);
    }
  }
  else if (selectedOption === "Uppercase and Lowercase Letters With Numbers") {
    for (let i = 0; i < passwordLength; i++) {
      console.log(createPassword += lettersNumbers[(Math.floor(Math.random() * lettersNumbers.length))]);
    }
  }
  else if (selectedOption === "Uppercase and Lowercase Letters with Numbers and Symbols") {
    for (let i = 0; i < passwordLength; i++) {
      console.log(createPassword += lettersNumbersSymbols[(Math.floor(Math.random() * lettersNumbersSymbols.length))]);
    }
  }
  else if (passwordLength < 8){
    return "Password Not Created, Length Not Selected"
  }
  else {
    return "Password Not Created, Type Not specified"
  }
  return createPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordCreation = document.getElementById("menu-close");

// Write password to the #password input
function writePassword() {
  pushMenu()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordCreation.addEventListener("click", menuDisappear);
