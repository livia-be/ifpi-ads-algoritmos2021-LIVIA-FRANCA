const prompt = require('prompt-sync')()

function main() {
    let salario
    while (salario != 0) {
        salario = Number(prompt('Salario:'))
        if (salario != 0) {
            if (salario <= 2999.99) {
                salario += salario * 0.25
                console.log("Novo salario:", salario, "(aumento 25%)")
            }
            else if (salario >= 3000 && salario <= 5999.99) {
                salario += salario * 0.20
                console.log("Novo salario:", salario, "(aumento 20%)")
            } else if (salario >= 6000 && salario <= 9999.99) {
                salario += salario * 0.15
                console.log("Novo salario:", salario, "(aumento 15%)")
            } else if (salario >= 10000) {
                salario += salario * 0.10
                console.log("Novo salario:", salario, "(aumento 10%)")
            }
        }
    }
}


main()