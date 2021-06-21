const prompt = require('prompt-sync')()
function main() {

    var a = Number(prompt('Número a: '))
    var b = Number(prompt('Número b: '))

    var resto = 1

    while (resto != 0){
        resto = a % b
    

        a = b
        b = resto

    }

    console.log("MDC:" + a)
}
main()