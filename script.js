// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCaseVal = "abcdefghijklmnopqrstuvwxyz";
let UpperCaseVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericVal = "1234567890";
let specialVal = "+!@#$%^&*()_+-=";

function generatePassword() {
  // Prompt for user input
  // console.log("Coming soon");
  let password = "";
  let passwordVal = "";

  let userpasswordLength = window.prompt("how many characters do you want 8-128?");
  userpasswordLength = parseInt(userpasswordLength);

  if (!userpasswordLength) {
    alert("Add value! 8 - 128");
  }

  else if (userpasswordLength < 8 || userpasswordLength > 128) {
    userpasswordLength = parseInt(prompt("You must choose a number between 8 and 128!"));
  }

  let lowerCaseOption = confirm("Do you want to add lower case letters?");
  if (lowerCaseOption) {
    passwordVal += lowerCaseVal;
  }

  let upperCaseOption = confirm("Do you want to add Upper case letters?");
  if (upperCaseOption) {
    passwordVal += UpperCaseVal;
  }

  let numericOption = confirm("Do you want to add numbers?");
  if (numericOption) {
    passwordVal += numericVal;
  }

  let specialOption = confirm("Do you also want to add special characters?");
  if (specialOption) {
    passwordVal += specialVal;
  }

  for (var i = 0; i < userpasswordLength; i++) {
    password = passwordVal[Math.floor(Math.random() * passwordVal.length)]
  }
  //   Displays generated password to page.
   return password

}
// Write password to the #password input
 function writePassword() {
let password = generatePassword();
let passwordText = document.querySelector("#password");
passwordText.value = password;
 } 
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
