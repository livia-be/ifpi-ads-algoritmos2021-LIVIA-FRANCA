//kg->g
const prompt = require('prompt-sync')()

//entrada
const kg = Number(prompt('Insira um valor para kg: '))

//processamento
const g = (kg*1000)

//saída
console.log('O valor em gramas é= ',g)