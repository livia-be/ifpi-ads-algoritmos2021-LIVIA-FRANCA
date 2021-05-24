//numero com 3 digitos somar o numero com o seu inverso
const prompt = require('prompt-sync')()
//entrada
const x = Number(prompt('Insira um número inteiro de três digitos: '))
//processamento
var cen = Math.floor(x / 100)
var dez = Math.floor((x % 100) / 10)
var uni = (x % 100) % 10

uni = uni * 100
dez = dez * 10

var inv = cen + dez + uni
var dif = x + inv
//saida
console.log("Numero:",x, "Inverso:", inv, "Num + inv = ", dif)


