const prompt = require("prompt-sync")();

function main() {
    const peso = Number(prompt('peso: '))
    const altura = Number(prompt('altura: '))

    const IMC = peso / altura ** 2

    if (IMC < 25) {
        console.log('peso normal')
    }
    else if (IMC >= 25 & IMC < 30) {
        console.log('obesidade')
    }
    else if (IMC > 30) {
        console.log('obesidade morbida')
    }
}

main()