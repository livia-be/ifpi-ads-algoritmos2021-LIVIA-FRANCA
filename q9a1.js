// inverter a ordem dos numeros a,b -> b,a
const prompt = require('prompt-sync')()

//Entrada
const A = Number(prompt('atribua um valor para A: '))
const B = Number(prompt('Atribua um valor para B: '))

// Processamento
const ab = [].concat(A,B);
const invs = [].concat(B,A);
//Saída
console.log('(A,B)= ',ab)
console.log('O inverso de (A,B)= ',invs)
