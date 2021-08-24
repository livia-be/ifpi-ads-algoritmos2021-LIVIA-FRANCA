//min -> dias horas minutos
const prompt = require('prompt-sync')()

//entrada
const num = Number(prompt('Insira um número inteiro de minutos: '))

//processamento
const dia = num/1440
const hrs = num/60
const min = num

//Saída
console.log('O valor em dias é = ',dia)
console.log('O valor em horas é = ',hrs)
console.log('O valor em minutos é = ',min)