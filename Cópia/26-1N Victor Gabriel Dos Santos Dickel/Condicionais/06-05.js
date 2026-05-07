
/// SWITCH CASE \\\

/*

Aticidade 1:

function pokemon(pokemons) {
    switch (pokemons) {
        case "Bulbasauro":
            console.log("Bulbasauro: Planta e veneno")
            break
        case "Charmander":
            console.log("Charmander: Fogo")
            break
        case "Squirtle":
            console.log("Squirtle: Água")
            break
        default:
            console.log("Pokemon não encontrado.")
    }
}

pokemon("Bulbasauro")
pokemon("Charmander")
pokemon("Squirtle")

*/

function faculdade(ensinoMedioConcluido, idade, cursandoOutraFaculdade) {

    if (ensinoMedioConcluido == true && idade >= 18 && cursandoOutraFaculdade == false) {
        console.log("A pessoa pode entrar na faculdade")
    } else {
        console.log("A pessoa não pode entrar na faculdade")
    }

}

faculdade(true, 19, false)