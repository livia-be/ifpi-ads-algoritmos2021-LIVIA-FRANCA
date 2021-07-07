//Leia um verbo regular terminado em ER e mostre sua conjugação no presente.
const prompt = require('prompt-sync')()
function main() {
    let verbo = prompt('Insira um verbo regular terminado em ER: '), verbo2 = ''
    /**
     * Se fizer i = 0, até i < string.length, repete por toda a string.
     * mas se for (let i = 0; i < verbo.length - 1; i++), repete por toda a string menos a ultima casa. 
     */ 
    if (verbo[verbo.length - 1] == 'r' && verbo[verbo.length - 2] == 'e') {
        for (let i = 0; i < verbo.length - 1; i++) {
            verbo2 += verbo[i]
        }
    } else {
        console.log('Não é um verbo regular terminado em ER')
    }
    console.log(verbo2)
}
main()
