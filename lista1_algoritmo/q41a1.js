//custo de um carro
const prompt = require('prompt-sync')()

//entrada

const valFab = Number(prompt('Insira o valor de fabrica do veiculo: '))

//processamento

var valDist = valFab + (0.28 * valFab)
var valImp = valDist + (0.45 * valFab) 

//saida
console.log('O custo do conumidor é R$: ',valImp) 