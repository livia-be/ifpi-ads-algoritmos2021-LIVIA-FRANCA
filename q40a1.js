//quanto um fumante gasta

const prompt = require("prompt-sync")()

//entrada

const anos = Number(prompt("Insira anos fumando: "))
const numDia = Number(prompt("Insira quantidade ao dia: "))
const preco = Number(prompt("Insira o preço da carteira: "))

//processamento

const valTotal = ((numDia * (anos * 360))/20) * preco

//saida
console.log("O valor em reais gasto por um fumante é R$", valTotal)