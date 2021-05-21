//área do quadrado
const prompt = require('prompt-sync')()

//Entrada
const l = Number(prompt('Insira o valor do lado do quadrado: '))

//Processamento
const A = Math.pow (l,2)

//Saída
console.log('Área= ',A)