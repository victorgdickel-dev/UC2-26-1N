function criarUsuario(nome, idade, cidade, hobbies) {
  return [nome, idade, cidade, hobbies]
}

function formatarHobbies(hobbies) {
  return hobbies.slice(0, -1).join(", ") + " e " + hobbies.slice(-1)
}

function gerarDescricao(usuario) {
  return usuario[0] + " tem " + usuario[1] + " anos, mora em " + usuario[2] + " e gosta de: " + formatarHobbies(usuario[3]) + "."
}

const usuarios = []

function adicionarUsuario(usuarios, usuario) {
  usuarios.push(usuario)
}

function gerarRelatorio(usuarios) {
  return "Total de usuários: " + usuarios.length
}

const usuario1 = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos"])
const usuario2 = criarUsuario("Alessandra", 21, "São Paulo", ["ler", "viagar", "comer fora"])

adicionarUsuario(usuarios, usuario1)
adicionarUsuario(usuarios, usuario2)

console.log(gerarDescricao(usuarios[0]))
console.log(gerarDescricao(usuarios[1]))
console.log(gerarRelatorio(usuarios))