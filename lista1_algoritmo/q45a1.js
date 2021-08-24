//numero de notas de cada valor que deve ser disponibilizado para o cliente
const prompt = require('prompt-sync')()

//entrada

var saque = Number(prompt("Valor do saque: "))

//processamento

var ced50 = Math.floor(saque / 50)
saque = saque - ced50 * 50

var ced20 =  Math.floor(saque / 20)
saque = saque - ced20 * 20

var ced10 = Math.floor(saque / 10)
saque = saque - ced10 * 10

var ced5 = Math.floor(saque / 5)
saque = saque - ced5 * 5

var ced1 = Math.floor(saque / 1)

//saida
console.log("Cedulas:\n 50:", ced50,"\n", "20:", ced20, "\n", "10:", ced10, "\n", "5:", ced5, "\n", "1:", ced1)