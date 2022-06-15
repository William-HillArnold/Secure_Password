// Assignment Code
let generateBtn = document.querySelector("#generate");

let userpasswordLength = "";
let optionAr = [];
let passwordVal = "";
let lowerCaseAr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericAr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let specialAr = ['+', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '='];


function getChoices() {
// Prompt for user input
optionAr = [];

  userpasswordLength = window.prompt("How many characters do you want 8-128?");

  if (!!!userpasswordLength || userpasswordLength < 8 || userpasswordLength > 128) {
    alert("You must choose a number between 8 and 128!");
    return false;
  }

  if (confirm("Do you want to add lower case letters?")) {
    optionAr = optionAr.concat(lowerCaseAr);
  }

  if (confirm("Do you want to add Upper case letters?")) {
    optionAr = optionAr.concat(upperCaseAr);
  }

  if (confirm("Do you want to add numbers?")) {
    optionAr = optionAr.concat(numericAr);
  }

  if (confirm("Do you also want to add special characters?")) {
    optionAr = optionAr.concat(specialAr);
  }
   return true
  }

   function generatePassword() {
     let password = "";

      for (let i = 0; i < userpasswordLength; i++) {
        let passwordVal = Math.floor(Math.random() * optionAr.length);
        password = password + optionAr[passwordVal];
      }
//  Displays generated password to page.
      return password;
    }

// Write password to the #password input
  function writePassword() {
    let correctChoices = getChoices();
      if (correctChoices){
    let newPassword = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }
}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  
