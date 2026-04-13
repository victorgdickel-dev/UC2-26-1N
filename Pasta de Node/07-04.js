// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome


// Exercício 1 :

const readline = require('readline-sync')

let phrase1 = readline.question("Digite seu nome completo: ")

console.log("Nome digitado: ", phrase1)
console.log("Quantidade de caracteres: ", phrase1.length)

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

// Exercício 2 :

let phrase2 = readline.question("Digite uma frase: ")

console.log(phrase2.toLocaleUpperCase())
console.log(phrase2.toLocaleLowerCase())

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

// Exercício 3 :

let phrase3 = "  Socorram-me! Subi no onibus em Marrocos!      "

console.log("Texto original:",phrase3)
console.log("Texto sem espaços desnecessários:", phrase3.trim())
console.log("Tamanho original:", phrase3.length)
console.log("Texto sem os espaços desnecessários:", phrase3.trim().length)

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

// Exercício 4 :

let fruits = ["Maçã" , "Banana" , "Laranja" , "Uva" , "Manga"]
let fruitsUser = readline.question("Digite o nome de qualquer fruta: ")
let list = fruits.includes(fruitsUser.toLowerCase())

console.log("A lista contém essa fruta?", list)

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

// Exercício 5 :

let phrase5 = readline.question("Digite uma frase: ")
let oldWork = readline.question("Digite a palavra que deseja substituir: ")
let newWord = readline.question("Digite a nova palavra: ")
let result5 = phrase5.replaceAll(oldWork , newWord)

console.log("Resultado:", result5)

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

// Exercício 6 :

let numberOne = 20
let numberTwo = 6
let result6 = numberOne + numberTwo

console.log("Soma:", result6 )
console.log(`A some de ${numberOne} mais ${numberTwo} é igual á ${result6} !`)

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof

// Exercício 7 :

let value7 = readline.question("Digite qualquer valor: ")

console.log("Valor digitado:", value7)
console.log("Tipo do valor:", typeof value7)

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase

// Exercício 8 :

let word1 = readline.question("Digite a primeira palavra: ")
let word2 = readline.question("Digite a segunda palavra: ")
let result8 = word1 + " " + word2

console.log("Frase final:", result8)
console.log("Tamanho total:", result8.length)

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

// Exercício 9 :

let phrase9 = readline.question("Digite uma frase: ")
let letter = readline.question("Digite uma letra: ")
let result9 = phrase9.toUpperCase().replaceAll(letter.toUpperCase(), "*")

console.log("Resultado final:", result9)