// Assignment code here
  
  // prompt the user for password criteria  
  //   * password length between 8-128 characters
  //   * prompt the user ask if they want uppercase, lowercase, numbers, and special characters
  // input should be validated and at least one character type should be selected
  // generate password based on criteria
  // display generated password on the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create generatePassword function
function generatePassword() {

  // create arrays for characters
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ";", ":", "<", ">", "/", "?"];

  // empty arrays to finalize generated password
  var finalArr = [];
  var userArr = [];

    // create prompts
    var lengthPrompt = prompt ("Password length must be between 8 and 128 characters long. How long do you want your password to be?");
    var askUpper = confirm ("Do you want uppercase letters in your password?");
    var askLower = confirm ("Do you want lowercase letters in your password?");
    var askNumbers = confirm ("Do you want numbers in your password?");
    var askSymbols = confirm ("Do you want symbols in your password?");

    // if they answer 'yes' or 'no'
    if (askUpper) {
      finalArr = finalArr.concat(upperCaseArr);
    }

    if (askLower) {
      finalArr = finalArr.concat(lowerCaseArr);
    }

    if (askNumbers) {
      finalArr = finalArr.concat(numberArr);
    }

    if (askSymbols) {
      finalArr = finalArr.concat(symbolArr);
    }

    for (var i = 0; i < lengthPrompt; i++) {
      userArr.push (finalArr[Math.floor(Math.random() * finalArr.length)]);
    }

    return userArr.join("");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
