const prompt = require('prompt-sync')()

function main() {
    let contaDigitos = 0

    let valor = Number(prompt('Número: '))
    
    if (valor == 0) {
        contaDigitos = 1
    }
    else
        while (valor >= 1) {
            contaDigitos++
            valor = valor / 10
        }
    console.log(contaDigitos)

}
main()