const prompt = require('prompt-sync')()

function main() {
    let s = 0
    const n = Number(prompt('insira o valor máximo N:'))
    //console.log('S = 1/N + 2/N-1 + até N/1 ')

    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {//impar
            s += i / (n - (i - 1))
            console.log(s)
        }
        else if (i % 2 == 0) {//par
            s -= (n - (i - 1)) / i
            console.log(s)
        }
    }
    console.log('S = ', s)
}
main()