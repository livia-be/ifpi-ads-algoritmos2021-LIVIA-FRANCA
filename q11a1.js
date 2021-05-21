//inverso de um numero inteiro de 3 digitos
const prompt = require('prompt-sync')()

//Entrada
const x = Number(prompt('Atribua um valor inteiro de três digitos para x: '))

//Processamento
const cen = Math.floor(x / 100)
const dez = Math.floor((x % 100) / 10)
const uni = (x % 100) % 10
const inv =  [].concat(uni,dez,cen);

//Saída
console.log('O inverso de x é = ',inv)