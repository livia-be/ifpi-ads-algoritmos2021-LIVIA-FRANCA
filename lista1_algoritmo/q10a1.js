// 2 numeros inteiros -> dividir o primeiro pelo segundo -> mostrar resultado e resto
const prompt = require('prompt-sync')()

//Entrada
const x1 = Number(prompt('Insira um valor para x: '))
const y1 = Number(prompt('Insira un valor para y: '))

//Processamento
const div = x1/y1
const rest = x1 % y1;

console.log('x1/y1 = ',div)
console.log(' resto =  ',rest)