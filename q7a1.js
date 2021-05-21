// 3 numeros-. calcular soma dos dois primeiros e a diferença dos dois ultimos
const prompt = require('prompt-sync')()

//Entrada
const x1 = Number(prompt('x1= '))
const x2 = Number(prompt('x2= '))
const x3 = Number(prompt('x3= '))

//Processamento
var soma2p = (x1+x2)
var div2u = (x2/x3)

//Saída
console.log('x1+x2 = ', soma2p) 
console.log('x2/x3= ',div2u)