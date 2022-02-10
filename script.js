// Assignment Code
var generateBtn = document.querySelector("#generate");
//character sets for the password as strings
var numbers = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
