/// Laços \\\

const ask = require('readline-sync')

let numero = null
let resultado = 0

while (numero !== 0) {
    numero = Number(ask.question("Digite um numero: "))

    resultado = resultado + numero
}

console.log("Resultado:", resultado)