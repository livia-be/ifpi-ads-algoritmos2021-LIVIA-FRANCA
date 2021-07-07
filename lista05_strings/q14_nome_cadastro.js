/**
 * Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
   regra: o login é composto pelas letras iniciais do nome do usuário.
 */
const prompt = require('prompt-sync')()
function main() {
    let nome = prompt('Nome:'), iniciais = ' '
    iniciais += nome[0]
    for (i = 0; i < nome.length; i++) {
        if (nome[i] == ' ') {
            iniciais += nome[i + 1]
        }
    }
    console.log(iniciais)
}
main()