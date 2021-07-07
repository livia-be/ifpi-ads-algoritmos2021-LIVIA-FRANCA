
const prompt = require('prompt-sync')()
function main() {
    let frase = prompt('Digite uma frase:');
    let substituir = prompt('Substring a substituir:')
    let novaSubstring = prompt('Nova substring:')

    let novaFrase = frase.replace(substituir, novaSubstring);

    console.log(novaFrase)
} main()





