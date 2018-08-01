

//generate random number, called goalValue, between 19-120, inclusive
let goalValue = function getGoalValue (min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//display the goalValue in #goal-value id


//generate random number, called crystalValue, between 1-12, inclusive
let crystalValue = function getCrystalValue(min, max) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

//assign to image class ".one"

//then, generate a random number 3 more times and assign to remaining image classes - ".two", ".three", ".four"


//when image is clicked add current value of image with value in #total and display new total

//if #total is === #goal-value, display message "You Win!" in #score-message and add 1 to #wins

//if #total is > #goal-value, display message "You Lose!" in #score-message and add 1 to #losses

//when game is over, start again by generating new #goal-value and new image values