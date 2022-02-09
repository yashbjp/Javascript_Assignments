// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (mass>0 && height>0){
        return (mass/(height*height))
    }else{
        return "INVALID INPUT"
    }
    // Write your code here
}

module.exports = BMICalculator;
