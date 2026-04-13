let racas = ["Labrador", "Poodle", "Bulldog", "Pastor Alemão", "Beagle"]

let numero = readline.questionInt("Digite um numero de 0 a 4: ")

if (numero >= 0 && numero <= 4) {
    console.log("Raça escolhida:", racas[numero])
} else {
    console.log("Número inválido! Digite entre 0 e 4.")
}