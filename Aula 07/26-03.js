/**/

// =========================
// EXERCÍCIO 1 - VARIÁVEIS BÁSICAS
// =========================

// Crie uma variável chamada name (nome) e atribua a ela o seu nome (string).
// Crie uma variável chamada age (idade) e atribua a ela sua idade (number).
// Crie uma variável chamada isStudent (éEstudante) e atribua true (boolean).

let name1 = "Victor"
let age = 17
let isStudent = true


let typeName = typeof name1
let typeAge = typeof age
let typeIsStudent = typeof isStudent

console.log("Atividade 1:", typeName, typeAge, typeIsStudent)

// =========================
// EXERCÍCIO 2 - TYPEOF
// =========================

// Usando as variáveis do exercício anterior,
// descubra o tipo de cada uma usando typeof.
//
// Armazene os resultados em:
// typeName (tipoNome)
// typeAge (tipoIdade)
// typeIsStudent (tipoEstudante)

let numberString = "100"

let convertedNumber = Number(numberString)
let backToString = String(convertedNumber)

console.log("Atividade 2:",convertedNumber, backToString)

// =========================
// EXERCÍCIO 3 - CONVERSÃO DE TIPOS
// =========================

// Crie uma variável chamada numberString (numeroString) com valor "100".
//
// Converta essa string para number
// e armazene em convertedNumber (numeroConvertido).
//
// Depois, converta de volta para string
// e armazene em backToString (numeroDeNovoString).

let firstNumber = 8
let secondNumber = 4

let sum = firstNumber + secondNumber
let subtraction = firstNumber - secondNumber
let multiplication = firstNumber * secondNumber
let division = firstNumber / secondNumber

console.log("Atividade 3:",sum, subtraction, multiplication, division)

// =========================
// EXERCÍCIO 4 - OPERAÇÕES SIMPLES
// =========================

// Crie duas variáveis:
// firstNumber (primeiroNumero) = 8
// secondNumber (segundoNumero) = 4
//
// Crie variáveis com os resultados:
// sum (soma) → soma dos dois números
// subtraction (subtracao) → diferença entre os números
// multiplication (multiplicacao) → multiplicação
// division (divisao) → divisão


let result1 = (10 + 5) * 2

console.log("Atividade 4:",result1)

// =========================
// EXERCÍCIO 5 - MONTANDO EXPRESSÃO 1
// =========================

// Crie uma variável chamada result1 (resultado1).
//
// Monte uma expressão que:
// 1. Some 10 com 5
// 2. Depois multiplique o resultado por 2
//
// IMPORTANTE:
// - Use parênteses para garantir que a soma aconteça primeiro



let result2 = (5 * 2) + 10

console.log("Atividade 5:",result2)

// =========================
// EXERCÍCIO 6 - MONTANDO EXPRESSÃO 2
// =========================

// Crie uma variável chamada result2 (resultado2).
//
// Monte uma expressão que:
// 1. Multiplique 5 por 2
// 2. Depois some 10 ao resultado



let result3 = ((20 / 4) + (3 * 2)) - 6

console.log("Atividade 6:",result3)

// =========================
// EXERCÍCIO 7 - MONTANDO EXPRESSÃO 3
// =========================

// Crie uma variável chamada result3 (resultado3).
//
// Monte uma expressão que:
// 1. Divida 20 por 4
// 2. Multiplique 3 por 2
// 3. Some os resultados dessas duas operações
// 4. Subtraia 6 do resultado final
// 

let result4 = ((10 + 2) * (3 + 1)) / (2 + 2) + (5 * (2 + 3))

console.log("Atividade 7:",result4)

// =========================
// EXERCÍCIO 8 - EXPRESSÃO COMPLEXA
// =========================

// Crie uma variável chamada result4 (resultado4).
//
// Monte uma expressão que:
// 1. Some 10 com 2
// 2. Some 3 com 1
// 3. Multiplique os resultados dessas duas somas
// 4. Divida tudo por (2 + 2)
// 5. Depois some com o resultado de:
//    - multiplicar 5 por (2 + 3)
//


let x = 15
let y = 10

let isEqual = x === y
let isDifferent = x !== y
let isGreater = x > y
let isLess = x < y
let isGreaterOrEqual = x >= y
let isLessOrEqual = x <= y

console.log("Atividade 8:",isEqual, isDifferent, isGreater, isLess, isGreaterOrEqual, isLessOrEqual)

// =========================
// EXERCÍCIO 9 - OPERADORES COMPARATIVOS
// =========================

// Crie duas variáveis:
// x = 15
// y = 10
//
// Crie variáveis booleanas:
//
// isEqual (éIgual) → verificar se x é igual a y
// isDifferent (éDiferente) → verificar se x é diferente de y
// isGreater (éMaior) → verificar se x é maior que y
// isLess (éMenor) → verificar se x é menor que y
// isGreaterOrEqual (éMaiorOuIgual) → verificar se x é maior ou igual a y
// isLessOrEqual (éMenorOuIgual) → verificar se x é menor ou igual a y

let isAdult = true
let hasLicense = false

let canDrive = isAdult && hasLicense
let cannotDrive = !canDrive
let canEnterParty = isAdult || hasLicense

console.log("Atividade 9:",canDrive, cannotDrive, canEnterParty)

// =========================
// EXERCÍCIO 10 - OPERADORES LÓGICOS
// =========================

// Crie duas variáveis:
// isAdult (éAdulto) = true
// hasLicense (temCarteira) = false
//
// Crie:
//
// canDrive (podeDirigir)
// → deve ser verdadeiro apenas se a pessoa for adulta E tiver carteira
//
// cannotDrive (naoPodeDirigir)
// → deve ser o contrário de canDrive
//
// canEnterParty (podeEntrarFesta)
// → deve ser verdadeiro se a pessoa for adulta OU tiver carteira

let finalResult = ((10 + 5) * 2 > 20) && ((30 / 3 === 10) || ((5 * 2) < 9))

console.log("Atividade 10:",finalResult)