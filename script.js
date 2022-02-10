// Assignment Code
var generateBtn = document.querySelector("#generate");
//character sets for the password as strings
var numbers = "0123456789";
var specialChars = "!#<=[&'()*>?@+,$%-./`{|:;]^_}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//variable for the user password characters left blank
var userPassword = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //keeping the password undefined
  var newPassword = "";

  // password length prompt
  var passwordLength = prompt("Length must be between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Oh no! Make sure you picked a number between 8 and 128!");
    return;
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var numbersConfirm = confirm("Do you want numbers in the password?");

    if (numbersConfirm) {
      //if true, numbers will be added to the userPassword
      userPassword = userPassword + numbers;
      console.log(userPassword);
    }
  }
}
