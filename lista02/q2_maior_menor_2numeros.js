const prompt = require("prompt-sync")();
function main() {
    const a = Number(prompt('Num a: '))
    const b = Number(prompt('Num b: '))

    if (a < b) {
        console.log('a é o menor e b é o maior')
    }

    else if (a > b) {
        console.log('b é o menor e a é o maior')
    }

    else
        console.log('Numeros iguais')
}
main()
