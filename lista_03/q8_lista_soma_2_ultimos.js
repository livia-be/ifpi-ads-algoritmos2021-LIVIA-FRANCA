const prompt = require('prompt-sync')()

function main() {
    let num = Number(prompt('Número: '))
    let a, b

    while (a + b != num) {
         a = Number(prompt(''))  
         b = Number(prompt(''))
    }
console.log(a , " + " , b , " = " , num)
}

main()