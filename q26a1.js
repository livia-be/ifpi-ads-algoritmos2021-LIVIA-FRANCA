const prompt = require('prompt-sync')()

//entrada
const num = Number(prompt('Insira um número inteiro de dias: '))

//processamento
const sem = (num/7)
const dia = (sem*7)

//saída
console.log('A quatidade de semas é = ',sem)
console.log('A quantidade de dia(s) é = ',dia)