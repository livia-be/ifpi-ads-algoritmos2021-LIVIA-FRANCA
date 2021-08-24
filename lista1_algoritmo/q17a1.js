const prompt = require('prompt-sync')()

const b = Number(prompt('Insira o valor da base do retângulo: '))
const h = Number(prompt('Insira o valor da altura do retângulo: '))

const A = (b*h)

console.log('Área= ',A)