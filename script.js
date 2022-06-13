// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for user input
   console.log ("Coming soon");

     let userpasswordLength = window.prompt("how many characters do you want 8-128?");
    userpasswordLength = parseInt(userpasswordLength);

    if (!userpasswordLength){
      alert("Add value! 8 - 128")
    } else if (userpasswordLength < 8 || userpasswordLength > 128){
     userpasswordLength = window.prompt("You must choose a number between 8 and 128!")
    } 
     
//   Displays generated password to page.
    return "Generated password";
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
