const prompt = require('prompt-sync')()
function main() {
    let frase = prompt('Frase:')
    let fraseEcripto = ''
    let vogais = ''
    let descripto = ''
    for (let i = 0; i < frase.length; i++) { // roda na original (pato)
        if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
            fraseEcripto += '#'
            vogais += frase[i] + i
        } else if (frase[i] == 'A' || frase[i] == 'E' || frase[i] == 'I' || frase[i] == 'O' || frase[i] == 'U') {
            fraseEcripto += '#'
            vogais += frase[i] + i
        } else {
            fraseEcripto += frase[i]
        }
    }
    for (i = 0; i < fraseEcripto.length; i++) { // roda na criptografada (p#t#)
        if (fraseEcripto[i] != '#') {
            descripto += fraseEcripto[i]
        } else {
            for (let j = 0; j < vogais.length; j++) { // corre pelo vogais
                if (vogais[j] == i) { // se o caractere do vogais for igual a posicao i (do for anterior)
                    descripto += vogais[j - 1] // significa que a casa anterior tem a vogal dessa posicao
                }
            }
        }
    }
    console.log('string encriptografada:', fraseEcripto)
    console.log('posicao das vogais:', vogais)
    console.log('string descriptografada:', descripto)
}
main()