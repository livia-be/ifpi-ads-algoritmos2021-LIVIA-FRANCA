//área do triangulo
const prompt = require('prompt-sync')()

//Entrada
const b = Number(prompt('Insira o valor da base do triângulo: '))
const h = Number(prompt('Insira o valor da altura do triângulo: '))

//Processamento
const A = (b*h) / 2

//Saída
console.log('A área do triângulo é = ',A)