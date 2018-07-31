

//generate random number, called getGoalValue, between 19-120, inclusive
function getGoalValue (min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


//generate random number, called getCrystalValue, between 1-12, inclusive
function getCrystalValue(min, max) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }