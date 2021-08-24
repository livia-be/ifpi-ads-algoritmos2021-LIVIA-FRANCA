
const prompt = require('prompt-sync')()
const num = Number(prompt('Insira um número inteiro de horas: '))

//processamento
const sem = (num/168)
const dia = (num/24)
const hrs =  num

console.log('O valor em semanas é = ',sem)
console.log('O valor em dias é = ',dia)
console.log('O valor em horas é = ',hrs)
