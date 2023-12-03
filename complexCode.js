/* complexCode.js */

// This code demonstrates a sophisticated JavaScript program that performs advanced mathematical operations and handles various error scenarios

// Definition of the Calculator class
class Calculator {
  constructor() {
    // Initialize the calculator memory to zero
    this.memory = 0;
  }

  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    return a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  }

  // Method to calculate the power of a number
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Method to calculate the square root of a number
  squareRoot(number) {
    if (number < 0) {
      throw new Error("Square root of a negative number is undefined!");
    }
    return Math.sqrt(number);
  }

  // Method to save a number to memory
  saveToMemory(number) {
    this.memory = number;
  }

  // Method to retrieve the number from memory
  retrieveMemory() {
    return this.memory;
  }
}

// Example usage of the Calculator class
const calculator = new Calculator();

try {
  const additionResult = calculator.add(5, 3);
  console.log("Addition Result:", additionResult);

  const subtractionResult = calculator.subtract(10, 4);
  console.log("Subtraction Result:", subtractionResult);

  const multiplicationResult = calculator.multiply(6, 4);
  console.log("Multiplication Result:", multiplicationResult);

  const divisionResult = calculator.divide(15, 3);
  console.log("Division Result:", divisionResult);

  const powerResult = calculator.power(2, 4);
  console.log("Power Result:", powerResult);

  const squareRootResult = calculator.squareRoot(25);
  console.log("Square Root Result:", squareRootResult);

  calculator.saveToMemory(10);
  const memoryValue = calculator.retrieveMemory();
  console.log("Memory Value:", memoryValue);
} catch (error) {
  console.error("An error occurred:", error.message);
}

// ... More usage examples and demonstration of advanced operations and error handling

// End of complexCode.js