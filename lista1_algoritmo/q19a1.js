//raio da esfera
const prompt = require('prompt-sync')()

//entrada
const rai = Number(prompt('Insira o valor do raio da esfera: '))

//processamento
const pi = 3.14
const vol = (4*pi*rai)/3

//saída
console.log('Volume= ,',vol)