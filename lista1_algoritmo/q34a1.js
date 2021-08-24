const prompt = require('prompt-sync')()
//entrada
const a = Number(prompt('Insira o primeiro numero: '))
const b = Number(prompt('Insira o segundo numero: '))
const c = Number(prompt('Insira o terceiro numero: '))
//processamento
var media = (a + b + c)/3
//saida
console.log("Media: ", media)