//inverso de um numero inteiro de 3 digitos
const prompt = require('prompt-sync')()

//Entrada
const x = Number(prompt('Atribua um valor inteiro de três digitos para x: '))

//Processamento
var cen = Math.floor(x / 100)
var dez = Math.floor((x % 100) / 10)
var uni = (x % 100) % 10

uni = uni * 100
dez = dez * 10

var inv = cen + dez + uni

//Saída
console.log('O inverso de x é : ',inv)