/*
// Exercícoio 1:

let nome = "Victor"
let cor = "Azul"

console.log("Meu nome é", nome, "e a minha cor favorita é", cor)

// Exercícoio 2:

const frase = "Entrarão na minha casa e roubarão tudo";

// Todas as letras maiúsculas
console.log(frase.toUpperCase());

// Na língua do i (substituindo "o" por "i")
console.log(frase.replaceAll("o", "i").replaceAll("O", "I"));

// Tamanho da frase
console.log(frase.length);

// Exercício 3:

// Array com 5 raças de cachorro
const racas = ["Labrador", "Poodle", "Bulldog", "Pastor Alemão", "Beagle"];

// Pede um número ao usuário (0 a 4)
let numero = prompt("Digite um número de 0 a 4:");

// Converte para número
numero = Number(numero);

// Verifica se está no intervalo válido
if (numero >= 0 && numero <= 4) {
    console.log("A raça escolhida foi:", racas[numero]);
} else {
    console.log("Número inválido!");
}

// Exercício 4:

// Criando o array
let numeros = [1, 2, 3, 4, 5, 6];

// 1. Tamanho do array
console.log("Tamanho inicial:", numeros.length);

// 2. Adicionando o número 7
numeros.push(7);
console.log("Após adicionar 7:", numeros);

// 3. Removendo os números 4 e 5
numeros = numeros.filter(num => num !== 4 && num !== 5);
console.log("Após remover 4 e 5:", numeros);

// 4. Novo tamanho do array
console.log("Novo tamanho:", numeros.length);
*/