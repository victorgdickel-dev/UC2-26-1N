
/// IF, ELSE IF e ELSE \\\

/*

A condição vai executar.

let condicao1 = true

if (condicao1){
    console.log("Entrei no if 1 ?", condicao1)
}

*/

/*

A condição não vai executar.

let condicao2 = false

if (condicao2){
    console.log("Entrei no if 2 ?", condicao2)
}

*/

/*

Teste

let salario = 4000
let carro = 4000

if (salario >= carro){
    console.log("Você comprou o seu carro !")
}

else{
    console.log("Você não tem dinheiro !")
}
*/


/*

Atividade 1

function result(num1, num2) {
    if (num1 === num2) {
        console.log("Os números são iguais !") 
    }
}

result(5,5)

*/

/*

Atividade 2

function result(num1, num2) {
    if (num1 === num2) {
        console.log("Os números são iguais !") 
    }
    
    else {
        console.log("Os números são diferentes !") 
    }
}

result(5,5)
result(5,10)

*/


/*

Atividade 3

Maneira 1:

function comparadores(num5,num6){
    if (num5 > num6) {
        console.log("O primeiro número é maior que o segundo !")
    } else if (num5 < num6) {
        console.log("O primeiro número é menor que o segundo ! ")
    } else {
        console.log("Os dois números são iguais !")
    }
}

comparadores(10,5)
comparadores(5,10)
comparadores(10,10)

Maneira 2:

function isQual(num5,num6){
    if (num5 > num6){
        return `Número ${num5} é maior que número ${num6}.`
    } else if (num5 < num6) {
        return `Número ${num5} é menor que número ${num6}.`
    } else {
        return `Número ${num5} e ${num6} são iguais.`
    }
}

console.log(isQual(5,10))

*/