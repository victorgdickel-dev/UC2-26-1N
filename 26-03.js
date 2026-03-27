/**/let name = "Victor"
let age = 17
let isStudent = true


let typeName = typeof name
let typeAge = typeof age
let typeIsStudent = typeof isStudent

console.log(typeName, typeAge, typeIsStudent)


let numberString = "100"

let convertedNumber = Number(numberString)
let backToString = String(convertedNumber)

console.log(convertedNumber, backToString)

let firstNumber = 8
let secondNumber = 4

let sum = firstNumber + secondNumber
let subtraction = firstNumber - secondNumber
let multiplication = firstNumber * secondNumber
let division = firstNumber / secondNumber

console.log(sum, subtraction, multiplication, division)



let result1 = (10 + 5) * 2

console.log(result1)


let result2 = (5 * 2) + 10

console.log(result2)



let result3 = ((20 / 4) + (3 * 2)) - 6

console.log(result3)


let result4 = ((10 + 2) * (3 + 1)) / (2 + 2) + (5 * (2 + 3))

console.log(result4)


let x = 15
let y = 10

let isEqual = x === y
let isDifferent = x !== y
let isGreater = x > y
let isLess = x < y
let isGreaterOrEqual = x >= y
let isLessOrEqual = x <= y

console.log(isEqual, isDifferent, isGreater, isLess, isGreaterOrEqual, isLessOrEqual)



let isAdult = true
let hasLicense = false

let canDrive = isAdult && hasLicense
let cannotDrive = !canDrive
let canEnterParty = isAdult || hasLicense

console.log(canDrive, cannotDrive, canEnterParty)


let finalResult = ((10 + 5) * 2 > 20) && ((30 / 3 === 10) || ((5 * 2) < 9))

console.log(finalResult)