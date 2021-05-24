//quantidade de cada um desses componentes para se obter certa quantidade de latão
const prompt = require('prompt-sync')()

//entrada

const kg = Number(prompt("Insira quantidade de latão: "))

//processamento

const cobre = kg * 0.7
const zinco = kg * 0.3

//saida
console.log('Quantidade de componentes para se obter',kg,'kg de latão.')
console.log("Cobre:", cobre, "kg", "Zinco:", zinco, "kg")