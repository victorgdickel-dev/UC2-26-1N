/// CONTROLE DE NOTAS \\\

const ask = require('readline-sync')

let alunos = []
let opcao = 0

function cadastrarAluno(nome, nota1, nota2, nota3) {
    let novoAluno = [nome, nota1, nota2, nota3]
    alunos.push(novoAluno)
}

function calcularMedia(aluno) {
    let media = (aluno[1] + aluno[2] + aluno[3]) / 3
    return media
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperacao"
    } else {
        return "Reprovado"
    }
}

function mostrarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.")
        return
    }

    for (let i = 0; i < alunos.length; i++) {
        let alunoAtual = alunos[i]

        let media = calcularMedia(alunoAtual)
        let situacao = verificarSituacao(media)

        console.log(`\nAluno: ${alunoAtual[0]}\nNotas: ${alunoAtual[1]}, ${alunoAtual[2]}, ${alunoAtual[3]}\nMédia: ${media.toFixed(2)}\nSituação: ${situacao}
`)
    }
}

while (opcao !== 3) {
    opcao = Number(ask.question(`\n1 = Cadastrar aluno\n2 = Mostrar alunos\n3 = Sair\n\nEscolha: `))

    switch (opcao) {
        case 1:
            let nome = ask.question("Digite o nome do aluno: ")

            let nota1 = Number(ask.question("Digite a nota 1: "))
            let nota2 = Number(ask.question("Digite a nota 2: "))
            let nota3 = Number(ask.question("Digite a nota 3: "))

            cadastrarAluno(nome, nota1, nota2, nota3)
            console.log("Aluno cadastrado com sucesso!")
            break

        case 2:
            mostrarAlunos()
            break

        case 3:
            console.log("Programa encerrado.")
            break

        default:
            console.log("Opção inválida!")
    }
}