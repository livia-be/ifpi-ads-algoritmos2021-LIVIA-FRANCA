/**
 * Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
   vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.
 */


const prompt = require('prompt-sync')()
function main() {
    let texto = prompt('Texto:')
    let coluna = Number(prompt('Coluna:'))
    let espacos = ''
    for (let i = 0; i < texto.length; i++) {
        espacos = ''
        for (j = 1; j < coluna; j++) {
            espacos += '|'
        }
        console.log(espacos, texto[i])
    }
} main()

