/*Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo. */
const prompt = require('prompt-sync')()

function main() {
    let numfichas, peso , nome, num
    let maisLeve = 9999, maisPesado = 0, numMaisLeve, numMaisPesado 
   numfichas = Number(prompt('Número de fichas:'))
    for (i = 0; i < numfichas; i++) {
        num = Number(prompt('Nº de identificacao:'))
        nome = Number(prompt('nome do boi:'))

            peso = Number(prompt('Peso:'))
            if (peso > maisPesado) {
                maisPesado = peso
                numMaisPesado = num
            }
            if (peso < maisLeve) {
                maisLeve = peso
                numMaisLeve = num
            }
        
    }
    console.log("Mais pesado: num", numMaisPesado, "(", maisPesado, "kg)")
    console.log("Mais leve: num", numMaisLeve, "(", maisLeve, "kg)")
}
main()