const prompt = require('prompt-sync')()
function main() {
    const frase = prompt('Frase: ')

    let tudoJunto, separado
    separado = frase.split(' ')
    tudoJunto = separado.join('')

    console.log(tudoJunto)
}
main()



