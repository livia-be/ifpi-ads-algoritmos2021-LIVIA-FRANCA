//numero inteiro em m -> km m 
const prompt = require('prompt-sync')()

const num = Number(prompt('Insira um número inteiro de metros: '))

const km = (num/1000)
const m =  (km*1000)

console.log('O valor em km é = ',km)
console.log('O valor em metros é = ',m)