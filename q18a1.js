//comprimento da circunferencia 
const prompt = require('prompt-sync')()

//Entrada
const rai = Number(prompt('Insira o valor do raio da circunferência: '))

//Processamento
const cir =  Math.floor(2*Math.PI*rai)

//Saída
console.log('Comprimento da cricunferência: ',cir)