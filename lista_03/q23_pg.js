const prompt = require('prompt-sync')()

function main() {
    let a, q, n, cont = 0
    q = Number(prompt('Razão:'))
    a = Number(prompt('Termo:'))
    n = Number(prompt('Quantos resultados?:'))
    
    while (cont < n) {
        console.log(a * Math.pow(q, cont))
        cont++
    }
}
main()