

// Generator functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Password generation function
function generatePassword(){
  // Ask user for password choices
  var lower = confirm("Would you like lowercase letters in your password?");
  var upper = confirm("Would you like uppercase letters in your password?");
  var symbol = confirm("Would you like symbols in your password?");
  var number = confirm("Would you like numbers in your password?");

  // Ask user for password length
  var passwordLength = parseInt(prompt("How many characters would you like in your password?"));

  // Error messages and restarts the password generation process
  if(isNaN(passwordLength)){
    alert("Please input a number");
    return generatePassword();
  } else if(passwordLength < 8 || passwordLength > 128){
     alert("Please input a length between 8 and 128.");
     return generatePassword();
  }

//Array that stores password info based on user choices
  var functionsArray = [];

  if (lower){
    functionsArray.push(getRandomLower);
  }
  if (upper){
    functionsArray.push(getRandomUpper);
  }
  if (symbol){
    functionsArray.push(getRandomSymbol);
  }
  if (number){
    functionsArray.push(getRandomNumber);
  }
  // Loop that determines password and stops at the end of user-assigned password length
  var passwordText = "";
  for(i=0; i <passwordLength; i++){
    passwordText+=functionsArray[Math.floor(Math.random() * functionsArray.length)]();
  }
  return passwordText;
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
