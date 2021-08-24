
const prompt = require('prompt-sync')()

//entrada

const ano = Number(prompt("Digite os anos: "))
const mes = Number(prompt("Digite os meses: "))
const dia = Number(prompt("Digite os dias: "))

//processamento

const diasTotais = ((ano * 360) + (mes * 30) + dia)

//saida
console.log('A idade em dia é : ',diasTotais)