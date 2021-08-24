//binario -> decimal
const prompt = require('prompt-sync')()

//entrada

const x = prompt('Insira um número com quatro dígitos binários: ')

//processamento

 let dec = ((x[0]*2**3) + (x[1]*2**2) + (x[2]*2**1) + (x[3]*2**0))

//saida

console.log('O valor em decimal é = ',dec)