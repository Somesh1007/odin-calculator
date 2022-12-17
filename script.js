let inputString = "5 + 5"
let outputNumber = 10

const inputDiv = document.querySelector('.screen-input')
const outputDiv = document.querySelector('.screen-output')

inputDiv.textContent = inputString
outputDiv.textContent = outputNumber
// const allButtons = document.querySelectorAll('button')
// allButtons.forEach(button => button.addEventListener('click', dummy))
// console.log(allButtons);


function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a, b)
    } else if (operator == '/') {
        return divide(a, b)
    }
}

function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}