/// CADASTRO DE USUÁRIO \\\

const ask = require('readline-sync')

let usuarios = []
let logado = false
let sair = false

while (!logado && !sair) {
  let opcao = Number(ask.question(`1 = Criar conta\n2 = Fazer login\n3 = Sair\n\nEscolha: `))

  switch (opcao) {
    case 1:
      criarConta()
      break

    case 2:
      logado = fazerLogin()
      break

    case 3:
      console.log("Programa encerrado.")
      sair = true
      break

    default:
      console.log("Opcao invalida!")
  }
}

function criarConta() {
  let usuario = ask.question("Digite um nome de usuario: ")

  let senha = ask.question("Digite uma senha: ", {
    hideEchoBack: true
  })

  let conta = [usuario, senha]
  usuarios.push(conta)

  console.log("Conta criada com sucesso!")
}

function fazerLogin() {
  let usuario = ask.question("Digite seu usuario: ")

  let senha = ask.question("Digite sua senha: ", {
    hideEchoBack: true
  })

  for (let conta of usuarios) {
    if (conta[0] === usuario && conta[1] === senha) {
      console.log("Login realizado com sucesso!")
      return true
    }
  }

  console.log("Usuario ou senha incorretos")
  return false
}