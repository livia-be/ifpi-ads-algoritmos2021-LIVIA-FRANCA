const prompt = require("prompt-sync")();
function main() {
    const num1 = Number(prompt('numero 1: '))
    const num2 = Number(prompt('numero 2: '))
    const num3 = Number(prompt('numero 3: '))
    const num4 = Number(prompt('numero 4: '))
    const num5 = Number(prompt('numero 5: '))

    const max = Math.max(num1, num2, num3, num4, num5)
    const min = Math.min(num1, num2, num3, num4, num5)

    console.log('maximo: ', max)
    console.log('minimo: ', min)
}
main()