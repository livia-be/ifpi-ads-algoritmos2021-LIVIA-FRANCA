const prompt = require("prompt-sync")();

function main() {
    const num = Number(prompt('numero entre 0 e 100: '))

    var naoPrimo = 0
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            naoPrimo = 1
        }
    }

    if (naoPrimo == 0) {
        console.log(num, 'é primo')

    } else {
        console.log(num, 'não é primo')
    }
}
main()