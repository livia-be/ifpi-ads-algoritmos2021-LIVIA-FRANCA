// Dólar -> Real
const prompt = require('prompt-sync')()

// Entrada
const dol = Number (prompt('Valor em dólar: '))

// Processamento 
const vDol = (dol*5)

// Saída
console.log('O valor em Real é: ',vDol)

