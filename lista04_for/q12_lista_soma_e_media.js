//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
const prompt = require('prompt-sync')()

function main() {

    let lista , soma=0 , media, i
    let n = Number(prompt('quantidade de termos: '))

    for (i = 0; i < n; i++) {
        console.log('Termo',i+1,':')
        lista = Number(prompt(''))
        soma += lista
       
    }
    media = soma/n
console.log('soma dos termos da lista: ',soma)
console.log('media entre os termos da lista: ',media)
}
main()