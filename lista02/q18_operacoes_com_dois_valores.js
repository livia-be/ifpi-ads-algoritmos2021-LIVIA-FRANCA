const prompt = require("prompt-sync")();
function main() {
    const n1 = Number(prompt('Numero 1: '))
    const n2 = Number(prompt('Numero 2: '))

    const opc = Number(prompt('1 - Adiçao\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n:'))

    if (opc == 1) {
        const soma = n1 + n2
        console.log(soma)
    }
    else if (opc == 2) {
        const subtracao = n1 - n2
        console.log(subtracao)
    }
    else if (opc == 3) {
        const mult = n1 * n2
        console.log(mult)
    }
    else if (opc == 4) {
        if (n2 != 0) {
            const div = n1 / n2
            console.log(div)
        }
    }
}
main()