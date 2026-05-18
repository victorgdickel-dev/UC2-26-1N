/// CADASTRO DE PRODUTOS \\\

const ask = require('readline-sync')

let stok = []
let Id = 1
let escolha = 0

while (escolha !== 5) {
  escolha = Number(ask.question(`O que voce deseja fazer?\n\n1 = Cadastrar Produto\n2 = Buscar produto por ID\n3 = Buscar produto por Nome\n4 = Mostrar produtos em estoque\n5 = Sair\n\nEscolha alguma dessas opcoes: `))

  switch (escolha) {
    case 1:
      let nome = ask.question("Nome do produto: ")
      let precoVenda = Number(ask.question("Preco de venda: "))
      let precoFabricacao = Number(ask.question("Preco de fabricacao: "))
      let quantidadeEstoque = Number(ask.question("Quantidade em estoque: "))

      cadastrarProduto(nome, precoVenda, precoFabricacao, quantidadeEstoque)
      break;

    case 2:
      let idBusca = Number(ask.question("Digite o ID do produto: "))
      buscarProdutoPorId(idBusca)
      break;

    case 3:
      let nomeBusca = ask.question("Digite o nome do produto: ")
      buscarProdutoPorNome(nomeBusca)
      break;

    case 4:
      mostrarProdutos()
      break;

    case 5:
      console.log("Programa encerrado.")
      break;

    default:
      console.log("Numero invalido!")
  }
}

function cadastrarProduto(nome, precoVenda, precoFabricacao, quantidadeEstoque) {
  let produto = [Id++, nome, precoVenda, precoFabricacao, quantidadeEstoque]

  stok.push(produto)

  console.log("Produto cadastrado com sucesso!")
}

function buscarProdutoPorId(id) {
  for (let produto of stok) {
    if (produto[0] === id) {
      console.log("Produto encontrado:")
      console.log(produto)
      return
    }
  }

  console.log("Produto nao encontrado.")
}

function buscarProdutoPorNome(nome) {
  for (let produto of stok) {
    if (produto[1].toLowerCase() === nome.toLowerCase()) {
      console.log("Produto encontrado:")
      console.log(produto)
      return
    }
  }

  console.log("Produto nao encontrado.")
}

function mostrarProdutos() {
  if (stok.length === 0) {
    console.log("Nenhum produto cadastrado. Tente novamente!")
    return
  }

  for (let produto of stok) {
    console.log(`ID: ${produto[0]}\nNome: ${produto[1]}\nPreco de Venda: R$${produto[2]}\nPreco de Fabricacao: R$${produto[3]}\nQuantidade em Estoque: ${produto[4]}
    `)
  }
}