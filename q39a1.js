//calcular d= r+s/2 
const prompt = require('prompt-sync')()

console.log('D = R + S / 2, sendo R = A+B e S = B+C')

//entrada
const A = Number(prompt("Insira A: "))
const B = Number(prompt("Insira B: "))
const C = Number(prompt("Insira C: "))
//processamento
const R = (A + B)**2
const S = (B + C)**2
const D = (R + S)/2
//saida
console.log('D = ',D)