let array = ["Oi", "sumido", "tudo", "bem?", "Saudades", "kk"]

function frase(array) {
    let mensagem = ""

    for (let loop of array) {
        mensagem = mensagem + loop + " "
    }

    console.log(mensagem)
}

frase(array)