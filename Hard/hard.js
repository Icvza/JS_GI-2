//Problem Data
let tomHeight = 9
let tomMass = 8

let jerryHeight = 10
let jerryMass = 45 

// Storing BMI value into variables 
let tomBmi = calBmi(tomHeight, tomMass)
let jerryBmi = calBmi(jerryHeight, jerryHeight)

// Function to calculate BMI
function calBmi(height, mass){
    return(mass / (height * height))
}

//Creating and assinging a boolen value due to question requirments and calling the final function 
function isTomOP (tomBmi, jerryBmi) {
    let isTomop = false
    if (tomBmi > jerryBmi){
        isTomOP = true
    } else {
        isTomOP = false
    }
    results(isTomOP)
}

// Console log the results
function results(isTomOP) {
    if(isTomOP) {
        console.log(`Is ${"Tom’s BMI higher than Jerry’s?"} ${isTomOP}`)
    } else {
        console.log(`Is ${"Tom’s BMI higher than Jerry’s?"} ${isTomOP}`)
    }
}

// invoking function 
isTomOP(tomBmi,jerryBmi)