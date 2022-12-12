const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber;
    return sum;
}

const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber;
    return difference;
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber;
    return quotient;
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber;
    return product;
}

const square = (num) => {
    const squared = num * num;
    return squared;
}

let result = add(2,3);
console.log(result);

result = subtract(2,3);
console.log(result);

result = divide(2,3);
console.log(result);

result = multiply(2,3);
console.log(result);

result = square(2);
console.log(result);