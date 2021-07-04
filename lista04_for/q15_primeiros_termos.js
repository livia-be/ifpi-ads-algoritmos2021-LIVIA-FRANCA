//Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
const prompt = require('prompt-sync')()

function main() {
    const lim = Number(prompt('Numero limite:'))
    let num = 1
    for (let i = 2; i < lim + 2; i++) {
        console.log(num);
        num =  num + i;
    }
}
main()