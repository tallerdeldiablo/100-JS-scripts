function calculator(number1, number2, operation) {
    switch(operation) {
        case 'add':
            return number1 + number2;
        case 'subtract':
            return number1 - number2;
        case 'multiply':
            return number1 * number2;
        case 'divide':
            return number1 / number2;
        default:
            return "Invalid operation!";
    }
}
