//  Vkm/h ->  Vm/s | Vm/s= Vkm/h / 3,6
const prompt = require('prompt-sync')()

// Entrada
const km = Number(prompt('Velocidade em km/h: '))

// Processamento
const ms = km / 3.6

// Saída
console.log ('A velocidade em m/s é: ', ms)