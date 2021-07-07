const prompt = require('prompt-sync')()
function main() {
    let texto = prompt('Texto:')
    let coluna = 5
    let espacos = ''
    for (let i = 0; i < texto.length; i++) {
        for (let j = 1; j < coluna; j++) {
            espacos += ' '
        }
        console.log(espacos, texto[i])
    }
} main()