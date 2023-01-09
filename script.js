let inputString = ""
let outputNumber = 0
let firstOperand = 0
let secondOperand = 0
let operator = ''

const inputDiv = document.querySelector('.screen-input')
inputDiv.textContent = ''
const outputDiv = document.querySelector('.screen-output')
let supportedOperations = ['/'] // For All Operation Types

// Buttons
const inputButtons = document.querySelectorAll('.input')
const operationButtons = document.querySelectorAll('.operation')
const clearButton = document.querySelector('#clear-button')
const clearEntryButton = document.querySelector('#clear-entry-button')
const backSpaceButton = document.querySelector('#backspace-button')
const equateButton = document.querySelector('#equate-button')

window.addEventListener('keydown', handleKeyDown) // For Keyboard Support
inputButtons.forEach(button => button.addEventListener('click', showInput))
operationButtons.forEach(button => {
    supportedOperations.push(button.textContent)
    button.addEventListener('click', handleOperation)
})
clearButton.addEventListener('click', clearScreen)
clearEntryButton.addEventListener('click', clearScreen)
backSpaceButton.addEventListener('click', backSpace)
equateButton.addEventListener('click', operate)

function handleKeyDown(event) {
    console.log(`Event Key is: ${event.key}`);
    //const findButtonByText = text => [...document.querySelectorAll('button')].find(btn => btn.textContent.includes(text))
    //console.log('Button By Text', findButtonByText);
    //buttons.style.backgroundColor = '#e7e7e7'
    //buttons.style.boxShadow = '0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.15)'
    if (event.key >= 0 && event.key <= 9 || event.key === ".") {
        showInput(event)
    } else if (event.key === 'Backspace') {
        backSpace(event)
    } else if (supportedOperations.includes(event.key) || event.key === 'Enter') {
        handleOperation(event)
    }
}

function handleOperation(event) {
    console.log('In handleOperation this.textContent is', this.textContent);

    if (operator) {
        console.log('Operator is not null', operator);
        outputNumber = operate()
        operator = this.textContent
        inputDiv.textContent = `${firstOperand} ${operator} `
        console.log('Output is', outputNumber);
    } else {
        console.log('Operator is null', operator);
        if (!this.textContent) {
            console.log('Text content is empty or null');
            this.textContent = event.key
            console.log('COntent Now is:', this.textContent);
        }
        operator = this.textContent
        if (inputString) {
            console.log(`inputString is not empty`);
            if (firstOperand === 0) {
                console.log(`firstOperand is 0`);
                inputDiv.textContent += ` ${this.textContent} `
                firstOperand = +inputString
                console.log(`firstOperand is `, firstOperand);
                inputString = ''
            } else if (secondOperand === 0) {
                console.log('secondOperand', secondOperand);
            } else {
                console.log('secondOperand', secondOperand);
            }
        } else {
            console.log('Input String is', inputString);
            if (outputNumber !== 0) {
                inputDiv.textContent = `${firstOperand} ${this.textContent} `
            }
        }
    }
}

function showInput(event) {
    let text = this.textContent

    // Take From Button Click
    if (!event.key && text) {
        if (text === '.' && inputString.includes('.')) {
            // Change Later
        } else {
            inputString += text
            inputDiv.textContent += text
        }
    } else if (event.key >= 0 && event.key <= 9 || event.key === '.') { // Take From Keyboard
        if (event.key === '.' && inputString.includes('.')) {
            // Change Later
        } else {
            inputString += event.key
            inputDiv.textContent += event.key
        }
    }
}

function operate() {
    if (operator) {
        secondOperand = +inputString
        console.log(`In operate `, `operator(${operator},${firstOperand},${secondOperand})`);
        if (operator === '+') {
            outputNumber = (firstOperand + secondOperand)
        } else if (operator === '-') {
            outputNumber = (firstOperand - secondOperand)
        } else if (operator === '*') {
            outputNumber = (firstOperand * secondOperand)
        } else if (operator === '/' || operator === '÷') {
            outputNumber = (firstOperand / secondOperand)
        } else if (operator === '1/x') {
            outputNumber = (1 / firstOperand)
        } else if (operator === 'x²') {
            outputNumber = (firstOperand * firstOperand)
        } else if (operator === '√x') {
            outputNumber = Math.sqrt(firstOperand)
        } else if (operator === '%') {
            outputNumber = (firstOperand / 100)
        } else if (operator === '±') {
            outputNumber = -firstOperand
        }

        outputDiv.textContent = outputNumber
        // Reset Values
        inputString = ''
        firstOperand = outputNumber
        secondOperand = ''
        operator = ''
    }
}

function clearScreen() {
    inputString = ''
    outputNumber = 0
    operater = ''
    firstOperand = 0
    secondOperand = 0
    inputDiv.textContent = ''
    outputDiv.textContent = ''
}

function backSpace(event) {
    if (!inputString) {
        return
    } else {
        inputString = inputString.substring(0, inputString.length - 1)
        inputDiv.textContent = inputString
    }
}