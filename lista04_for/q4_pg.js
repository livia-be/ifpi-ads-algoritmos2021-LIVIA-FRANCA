//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
//Geométrica que tem por valor inicial A0 e razão R.
const prompt = require('prompt-sync')()

function main() {
    let t, lim
    r = Number(prompt('Razão:'))
    t = Number(prompt('Termo:'))
    lim = Number(prompt('limite:'))

    console.log('valores menores que ', lim)

    for (; t < lim; t = (t * r)) {  //(comando (1vez, inicio); condição; comando (sempre))
        console.log(t)
    }
}
main()

