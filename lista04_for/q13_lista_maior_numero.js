//Leia N e uma lista de N números e escreva o maior número da lista.
const prompt = require('prompt-sync')()

function main() {
    let lim = Number(prompt('quantidade de termos: '))
    let maior = 0, lista
    for (i = 0; i < lim; i++) {
        lista = Number(prompt('item da lista:'))
        if (lista > maior) {
            maior = lista
        }
    }
    console.log(maior)
}
main()