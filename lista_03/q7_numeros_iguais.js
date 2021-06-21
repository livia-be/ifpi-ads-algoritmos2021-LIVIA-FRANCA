const prompt = require('prompt-sync')()

function main() {
    let num1 = Number(prompt('Número: '))
    let num2
    while (num2 != num1) { 
        num2 = Number(prompt('Num da lista: '))
    }

    console.log(num2 + " é igual a " + num1)
}

main()