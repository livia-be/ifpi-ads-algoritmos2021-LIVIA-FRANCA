const prompt = require("prompt-sync")();
function main() {
    const n1 = Number(prompt('Numero 1: '))
    const n2 = Number(prompt('Numero 2: '))

    if (n1 % n2 == 1) {
        const soma = n1 + n1 + (n1 % n2)
        console.log(soma)
    }
    else if (n1 % n2 == 2) {
        if (n1 % 2 == 0) {
            console.log('n1 é par')
        } else { console.log('n1 é impar') }

        if (n2 % 2 == 0) {
            console.log('n2 é par')
        } else { console.log('n2 é impar') }
    }
    else if (n1 % n2 == 3) {
        const multip = (n1 + n2) * n1
        console.log(multip)
    }
    else if (n1 % n2 == 4) {
        if (n2 != 0) {
            const div = (n1 + n2) / n2
            console.log(div)
        }
    }
    else {
        const q1 = n1 ** 2
        const q2 = n2 ** 2
        console.log('quadrado de n1:', n1, '\n', 'quadrado de n2:', n2)
    }
}
main()