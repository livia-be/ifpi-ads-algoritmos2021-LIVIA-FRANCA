const prompt = require('prompt-sync')()

function main() {

    let a, q, n, cont = 0
    r = Number(prompt('Razão:'))
    a = Number(prompt('Termo:'))
    n = Number(prompt('Quantos resultados?:'))

    while (cont < n) {
        console.log(a + (r * cont))
        cont++
    }
}
main()