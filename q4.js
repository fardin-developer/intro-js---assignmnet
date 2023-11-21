

function calculateIn(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

let principalAmount = 1000; 
let interestRate = 5; 
let timePeriod = 2; 


let result = calculateIn(principalAmount, interestRate, timePeriod);

console.log("Simple Interest: rs " + result.toFixed(2)); 