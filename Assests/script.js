// Assignment code here
var passwordLength = 0;
var selectedOption = "";
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
  console.log(selectedOption);
  console.log(passwordLength);
  if (selectedOption === "lowercaseLetters" && 128 >= passwordLength && passwordLength>= 8) {
    for (let i = 0; i < passwordLength; i++) {
      createPassword += lowercase[(Math.floor(Math.random() * lowercase.length))];
    }
  }
  else if (selectedOption === "letters" && 128 >= passwordLength && passwordLength >= 8) {
    for (let i = 0; i < passwordLength; i++) {
      createPassword += letters[(Math.floor(Math.random() * letters.length))];
    }
  }
  else if (selectedOption === "lettersNumbers" && 128 >= passwordLength && passwordLength >= 8) {
    for (let i = 0; i < passwordLength; i++) {
      createPassword += lettersNumbers[(Math.floor(Math.random() * lettersNumbers.length))];
    }
  }
  else if (selectedOption === "lettersNumbersSymbols" && 128 >= passwordLength && passwordLength >= 8) {
    for (let i = 0; i < passwordLength; i++) {
      createPassword += lettersNumbersSymbols[(Math.floor(Math.random() * lettersNumbersSymbols.length))];
    }
  }
  else if (passwordLength > 128) {
    return "Password Length Too Long!"
  }
  else if (passwordLength < 8) {
    return "Password Length Too Short!"
  }
  else {
    return "You Didn't Select a Type!"
  }
  return createPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordCreation = document.getElementById("menu-close");

// Write password to the #password input
function pushMenu() {
  document.getElementById("overlay").style.display = "flex";
}

function passwordAppear() {
  document.getElementById("overlay").style.display = "none";
  selectedOption = document.getElementById("type").value;
  console.log(selectedOption);
  passwordLength = document.getElementById("length").value;
  console.log(passwordLength);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", pushMenu);
passwordCreation.addEventListener("click", passwordAppear);
