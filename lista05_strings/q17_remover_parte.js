/*Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
    10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.
    */
const prompt = require('prompt-sync')()
function main() {
    let texto = prompt('texto:'), novoTexto = ''
    let posicao = prompt('posicao:')
    let quantApagar = Number(prompt('quantidade a apagar:'))

    for (let i = 0; i < texto.length; i++) {

        if (i == posicao - 1) {
            i += quantApagar - 1 
        } else {
            novoTexto += texto[i]
        }
    }
    console.log(novoTexto)
} main()