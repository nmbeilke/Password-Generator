// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable Declarations //
var allNumbers = [0,1,2,3,4,5,6,7,8,9]
var allLetters = "abcdefghijklmnopqrstuvwxyz"
var allSpecialCharacters = "~!@#$%^&*()_+"
var allCapsLetters = allLetters.toUpperCase()
var splitLowerLetters = allLetters.split("")
var splitUpperLetters = allCapsLetters.split("")
var splitSpecial = allSpecialCharacters.split("")

var addCharacter = []
var newPassword = []
var formattedPassword = []

// Add Event Listener to Start Function //
generateBtn.addEventListener("click", function generatePassword (){

// Start Function and Prompts //
  var askLength = window.prompt("Enter a number between 8-128 for the number of characters of your new password")

  if (askLength <8 || askLength > 128 ) {
    alert("Please choose a number between 1-129.")
    return generatePassword
  }
  var askNumbers = window.confirm("Click confirm if you want your new password to contain numbers")
  var askUppercase = window.confirm("Click confirm if you want your new password to contain uppercase letters")
  var askLowercase = window.confirm("Click confirm if you want your new password to contain lowercase letters")
  var askSpecialCharacter = window.confirm("Click confirm if you want your password to include special characters (examples: ~!@#$%^&*()_+)")

// Use Prompt Responses //
 if (askNumbers) {
   addCharacter = addCharacter.concat(allNumbers)
 }
 if (askUppercase) {
   addCharacter = addCharacter.concat(splitUpperLetters)
 }
 if (askLowercase) {
   addCharacter = addCharacter.concat(splitLowerLetters)
 }
 if (askSpecialCharacter) {
   addCharacter = addCharacter.concat(splitSpecial)
 }

 if (askLength.length)
  for (i = 0; i < askLength; i++) {
    var getRandom = addCharacter[Math.floor(Math.random() * addCharacter.length)]
 
    newPassword.push(getRandom)
}
// Format Password //
newPassword.join("")

// Write password to the #password input //
formattedPassword = document.querySelector("#password")

formattedPassword.value = newPassword.join("")

})