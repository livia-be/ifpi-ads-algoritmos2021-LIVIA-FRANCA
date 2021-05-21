//fahrenheit -> graus celsius
const prompt = require('prompt-sync')()

//entrada
const f = Number(prompt('Insira um valor para uma temperatura em fahrenheit: '))

//processamento
const c = (5*f-160)/9

//saída
console.log('A temperatura em graus celsius é= ',c)