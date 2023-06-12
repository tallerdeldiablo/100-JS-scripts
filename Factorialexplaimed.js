// This is a simple Javascript program to calculate the factorial of a number

// First, we define the function that calculates the factorial
function calculateFactorial(number) {
    let result = 1;

    // We use a for loop to multiply the result by each number from 1 to the input number
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    // After the loop has finished, we return the result
    return result;
}

// Now we use the function to calculate the factorial of a specific number
let myNumber = 5;
let factorialOfMyNumber = calculateFactorial(myNumber);

// Finally, we print the result to the console
console.log('The factorial of ' + myNumber + ' is ' + factorialOfMyNumber);
