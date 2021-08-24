//meses-> anos meses
const prompt = require('prompt-sync')()

const num = Number(prompt('Insira um número inteiro de meses: '))

const ano =  num/12
const mes = (ano*12)

console.log('O valor em ano é = ',ano)
console.log('O valor em mês é = ',mes)