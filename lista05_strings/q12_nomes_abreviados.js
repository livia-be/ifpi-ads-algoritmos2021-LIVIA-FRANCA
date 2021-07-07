const prompt = require('prompt-sync')()
function main() {
    let str = prompt('Digite um nome:'), abrev = ''

    for (i = str.length - 1; i > 0; i--) {
        if (str[i] != ' ') {
            abrev += str[i]
        } else {
            break
        }
    }
    abrev = inverter(abrev)
    abrev += '/'
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            abrev += str[i]
        } else {
            break
        }
    }
    console.log(abrev)
}
main()

function inverter(nome) {
    let invertido = ''
    for (i = nome.length - 1; i >= 0; i--) {
        invertido += nome[i]
    }
    return invertido
}