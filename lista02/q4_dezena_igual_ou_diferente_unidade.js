const prompt = require("prompt-sync")();
function main() {
    const num = Number(prompt('número de dois digitos: '))

    const dez = Math.floor(num / 10)
    const uni = num - (dez * 10)

    if (dez == uni)
        console.log("Algarismos iguais")
    else
        console.log("Algarismos diferentes")
}
main()