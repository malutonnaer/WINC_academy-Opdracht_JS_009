const squareCalculation = function(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
  };
  
console.log(squareCalculation(1, 1));

/* shorter solution 

const doSquareCalculation = function(number1, number2) {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

*/

/* arrow solution

const squareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
  };
  
console.log(squareCalculation(1, 1));

*/
