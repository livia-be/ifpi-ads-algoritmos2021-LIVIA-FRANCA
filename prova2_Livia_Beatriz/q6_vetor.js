const prompt = require('prompt-sync')()
const { media, maiorV, menorV, qntPos, qntNeg, verificar_repetidos } = require("./utils")
function main() {
    let tam = Number(prompt('Tamanho do vetor:')), vetor = []
    for (let i = 0; i < tam; i++) {
        vetor[i] = Number(prompt(`elemento ${i}: `))
    }
    let med = media(vetor)
    let maior = maiorV(vetor)
    let menor = menorV(vetor)
    let qntpos = qntPos(vetor)
    let qntneg = qntNeg(vetor)
    let repetidos = verificar_repetidos(vetor)
    console.log('Media:', med)
    console.log('Maior:', maior)
    console.log('Menor:', menor)
    console.log('Quantidade de positivos:', qntpos, '\nQuantidade de negativos:', qntneg)
    console.log('Numero de repetidos:', repetidos)
}
main()