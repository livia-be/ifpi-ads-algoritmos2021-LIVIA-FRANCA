//número de 3 digitos-> soma dos elementos c+d+u
const prompt = require('prompt-sync')()

//Entrada
const num = Number(prompt('Inteiro de 3 digitos: '))

//Processamento
const cen = Math.floor(num / 100)
const dez = Math.floor((num % 100) / 10)
const uni = (num % 100) % 10

// Saída
console.log('A soma dos elementos é ', cen + dez + uni)