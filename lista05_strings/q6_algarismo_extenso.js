//Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.
const prompt = require('prompt-sync')()
function main() {
    let frase = prompt('Insira uma frase que contenha pelo menos um algarismo: ')

    let frase2 = ''

    for (let i = 0; i < frase.length; i++) {

        if (frase[i] == '0') {
            frase2 += 'zero'
        } else if (frase[i] == '1') {
            frase2 += 'um'
        } else if (frase[i] == '2') {
            frase2 += 'dois'
        } else if (frase[i] == '3') {
            frase2 += 'tres'
        } else if (frase[i] == '4') {
            frase2 += 'quatro'
        } else if (frase[i] == '5') {
            frase2 += 'cinco'
        } else if (frase[i] == '6') {
            frase2 += 'seis'
        } else if (frase[i] == '7') {
            frase2 += 'sete'
        } else if (frase[i] == '8') {
            frase2 += 'oito'
        } else if (frase[i] == '9') {
            frase2 += 'nove'
        } else {
            frase2 += frase[i]
        }
    }
    console.log(frase2)
}
main()
