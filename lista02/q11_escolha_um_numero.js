const prompt = require("prompt-sync")();
function main() {
    const num1 = Number(prompt('digite num 1: '))
    const num2 = Number(prompt('digite num 2: '))
    const num3 = Number(prompt('digite num 3: '))
    const opc = Number(prompt('digite a opcao: '))

    if (opc == 1) {
        console.log(num1)
    }
    else if (opc == 2) {
        console.log(num2)
    }
    else if (opc == 3) {
        console.log(num3)
    }
}
main()