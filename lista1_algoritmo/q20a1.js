//graus celsius -> fahrenheit
const prompt = require('prompt-sync')()

//entrada
const c = Number(prompt('Insira um valor para uma temperatura em graus celsius: '))

//processamento
const f = (9*c+160)/5

//saída
console.log('A temperatura em fahrenheit é: ',f)