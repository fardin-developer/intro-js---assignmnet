
function calculateBMI(weight, height) {
    return weight / (height * height);
  }
 
  let weight = 60; //in kgggg
  let height = 1.75; // in meters
  
  let bmi = calculateBMI(weight, height);
  console.log("BMI: " + bmi);
  