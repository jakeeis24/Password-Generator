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
    //does user want numbers included
    var numbersConfirm = confirm("Do you want numbers in the password?");

    if (numbersConfirm) {
      //if true, numbers will be added to the userPassword
      userPassword = userPassword + numbers;
    } else {
      // if false, numbers will be left out of the password
      userPassword = userPassword;
    }
    console.log(userPassword);
    //does user want special characters included
    var symbols = confirm(
      "Do you want special characters (!@#$...) in the password?"
    );
    //if true special characters will be added to the user password
    if (symbols) {
      userPassword = userPassword + specialChars;
    } else {
      // if false, special characters will be left out of the password
      userPassword = userPassword;
    }
    console.log(userPassword);
    //does the user want lowercase letters included
    var lowCaseLetters = confirm(
      "Do you want lowercase letters in the password?"
    );
    //if true lowercase letter will be added to the user password
    if (lowCaseLetters) {
      userPassword = userPassword + letters;
    } else {
      // if false, lowercase letters will be left out of the password
      userPassword = userPassword;
    }
    console.log(userPassword);
    //does the user want capital letters included
    var bigLetters = confirm("Do you want capital letters in the password?");
    //if true capital letters will be added to the user password
    if (bigLetters) {
      userPassword = userPassword + capLetters;
    } else {
      // if false, capital letters will be left out of the password
      userPassword = userPassword;
    }
    console.log(userPassword);
    //if none selected, restart process
    if (userPassword == false) {
      alert(
        "Please select at least one category of characters to add to your password!"
      );
      // return;
      return generatePassword();
    }
    //with the selected characters, pick random characters at the selected length
    for (var i = 0; i < passwordLength; i++) {
      newPassword =
        newPassword +
        userPassword.charAt(Math.floor(Math.random() * userPassword.length));
    }
    console.log(newPassword);
    console.log(userPassword);
    return newPassword; //gives the user the password
    reset;
  }
}

// USE !-- instead of the false boolean!!!!!!!!!!!!!
