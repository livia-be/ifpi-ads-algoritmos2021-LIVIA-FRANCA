const prompt = require('prompt-sync')()

function main() {
    let num, peso
    let maisLeve = 9999, maisPesado = 0, numMaisLeve, numMaisPesado
    while (num != 0) {
        num = Number(prompt('Nº de identificacao:'))
        if (num != 0) {
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
    }
    console.log("Mais pesado: num", numMaisPesado, "(", maisPesado, "kg)")
    console.log("Mais leve: num", numMaisLeve, "(", maisLeve, "kg)")
}
main()