//Leia lista de numeros ...escrever o msm numero e a relacao de seus divisores
const prompt = require('prompt-sync')()

function main() {
    var cont = 1

    while (num != 0) {

        var num = Number(prompt('numero:'))
        cont = 1

        while (cont <= num) {
            if (num % cont == 0)
                console.log("divisor:" + cont)
            cont++ //adicionar uma unidade ao valor da variavel (cont += 1 OU cont = cont + 1)
        }
    }
}
main()