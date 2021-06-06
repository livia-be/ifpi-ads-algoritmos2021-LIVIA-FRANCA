const prompt = require("prompt-sync")();
function main() {
    const num = Number(prompt('digite um numero: '))

    if (num % 2 == 0) {
        console.log('Numero par')
    }
    else
        console.log('numero impar')
}
main()