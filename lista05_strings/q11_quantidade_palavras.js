/*Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.*/
const prompt = require('prompt-sync')()
function main() {
    let str = prompt('Digite uma frase:'), qnt = 0

    var palavras = str.split(' ').length;
	console.log(palavras);
}
main()