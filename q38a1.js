//soma das frações
const prompt = require('prompt-sync')();

//entrada
const n1 = Number(prompt('numerador 1: '))
const d1 = Number(prompt('denominador 1: '))
const n2 = Number(prompt('numerador 2: '))
const d2 = Number(prompt('denominador 2: '))

//processamento
const numerador = (n1*d2)+(n2*d1)
const denominador = (d1*d2)

//saída
console.log('A soma das frações é: ',numerador,'/',denominador)