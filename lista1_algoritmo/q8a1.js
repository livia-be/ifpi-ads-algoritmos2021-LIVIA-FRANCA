// 2 numeros-> soma/subtraçao
const prompt = require('prompt-sync')()

//Entrada
const x1 = Number(prompt('x1= '))
const x2 = Number(prompt('x2= '))

//Processamento
const soma = (x1+x2)
const sub = (x1-x2)
const div = (soma/sub)

//Saída
console.log('(x1+x2)/(x1-x2)= ',div)