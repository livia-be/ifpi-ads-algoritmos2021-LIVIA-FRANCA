//entrada e parcela de compra
const prompt = require('prompt-sync')()

//entrada
const vm = Number(prompt('Valor da compra: '))
 
//processamento
const p = (vm - (vm%3))/3
const ent = p + (vm%3)

//saída
console.log('Entrada:', ent, '\n', 'Valor das parcelas: ', p)