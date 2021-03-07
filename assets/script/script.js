// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays set as variables which are called upon in generateOptions function to concat into arrayAllOptions if true after window.confirm
var arrayUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var arraySpecial = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var characterCriteriaAmount;

// Write password to the #password input
function writePassword() {
  //create new function outside the above function for generatePassword, want to return a string
  var password = generatePassword();
  //password text area selected and text value is set to password variable
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

  function generatePassword (){
  //var result for building password text, string we need to return
  var result = "" 
  //to loop through something we need an array, allOption new variable for result of generateOptions function (arrayAllOptions)
  var allOptions = generateOptions()
  //loop, each stop on each index gives a random character and adds it to result
  for (var i = 0; i < characterCriteriaAmount; i++) { 
    var randomNumber = Math.floor(Math.random() * allOptions.length)
    result = result + allOptions[randomNumber];                                           
  }
  return result
}

//This function needs to get options from the user
function generateOptions (){ 
  var arrayAllOptions = [];

  characterCriteriaAmount = window.prompt("Please select how many characters you would like your password to be (between 8-128).");
  //if statement sets allowed number of characters for characterCriteriaAmount
  if (characterCriteriaAmount < 8 || characterCriteriaAmount > 128) {
    window.alert("You must choose a number between 8 and 128")
    return
  }

  var characterCriteriaUppercase = window.confirm("Would you like uppercase characters in your password? (Okay for Yes or Cancel for No)");
  //if yes is selected, equals true, then the characterCriteria is concated to arrayAllOptions as its own predefined array.
  if (characterCriteriaUppercase === true) {
    arrayAllOptions = arrayAllOptions.concat(arrayUppercase)
  }

  var characterCriteriaLowercase = window.confirm("Would you like lowercase characters in your password? (Okay for Yes or Cancel for No)");
  if (characterCriteriaLowercase === true) {
    arrayAllOptions = arrayAllOptions.concat(arrayLowercase)
  }

  var characterCriteriaNumeric = window.confirm("Would you like Numeric characters in your password? (Okay for Yes or Cancel for No)");
  if (characterCriteriaNumeric === true) {
    arrayAllOptions = arrayAllOptions.concat(arrayNumeric)
  }

  var characterCriteriaSpecial = window.confirm("Would you like Special characters in your password? (Okay for Yes or Cancel for No)");
  if (characterCriteriaSpecial === true) {
    arrayAllOptions = arrayAllOptions.concat(arraySpecial)
  }
  
  //result of all true and concated array options 
  return arrayAllOptions;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




