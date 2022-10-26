const romanNumbersValue = [
    1000,
    500,
    100,
    50,
    10,
    5,
    1
]
const romanNumbersName = [
    'M',
    'D',
    'C',
    'L',
    'X',
    'V',
    'I',
]
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const romanConverter = (romanNumber) => {
    let decimalNumber = 0
    let romanNumberSplitted = []
    let curr = 0
    let next = 0
    romanNumberSplitted = romanNumber.toUpperCase().split('')
    for (let i = 0; i < romanNumberSplitted.length; i++) {
        curr = romanNumbersValue[romanNumbersName.indexOf(romanNumberSplitted[i])]
        next = romanNumbersValue[romanNumbersName.indexOf(romanNumberSplitted[i + 1])]
        if (curr < next) {
            if ((romanNumbersName.indexOf(romanNumberSplitted[i]) - romanNumbersName.indexOf(romanNumberSplitted[i + 1]) <= 2)) {
                decimalNumber -= romanNumbersValue[romanNumbersName.indexOf(romanNumberSplitted[i])]
            } else {
                return 4000
            }
        }
        else {
            decimalNumber += romanNumbersValue[romanNumbersName.indexOf(romanNumberSplitted[i])]
        }
    }
    return decimalNumber
}
let romanNumberString = ''
let index = 0
let indexEnd = 0
const revertToRoman = (decimalNumber) => {
    if (decimalNumber <= 3999) {
        while (decimalNumber > 0) {
            indexEnd = index - (index % 2) + 2
            if (decimalNumber >= romanNumbersValue[index]) {
                decimalNumber -= romanNumbersValue[index]
                romanNumberString += romanNumbersName[romanNumbersValue.indexOf(romanNumbersValue[index])]
            }
            else if (decimalNumber >= (romanNumbersValue[index] - romanNumbersValue[indexEnd])) {
                decimalNumber -= (romanNumbersValue[index] - romanNumbersValue[indexEnd])
                romanNumberString += romanNumbersName[romanNumbersValue.indexOf(romanNumbersValue[indexEnd])]
                romanNumberString += romanNumbersName[romanNumbersValue.indexOf(romanNumbersValue[index])]
            }
            else { index += 1 }
        }
    } else {
        return "Wrong input"
    }
    return romanNumberString
}
let decimalSum = 0
readline.question('Enter number\n', (formula) => {
    let romanNumbers = formula.split("+")
    for (let i = 0; i < romanNumbers.length; i++) {
        decimalSum += romanConverter(romanNumbers[i])
    }
    console.log(revertToRoman(decimalSum));
    readline.close()
})