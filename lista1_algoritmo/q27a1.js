//numero inteiro em segundos -> h min s
const prompt = require('prompt-sync')()

const num = Number(prompt('Insira um valor inteiro em segundos: '))

const h = num/3600
const min = num/60

console.log('O valor em horas é = ',h)
console.log('O valor em minutos é = ',min)