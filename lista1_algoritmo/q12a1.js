//salario com 25% de aumento
const prompt = require('prompt-sync')()

var sal = Number(prompt('Insira o seu salário: '))

//processamento
sal = sal + ((sal * 25)/100)

//saida
console.log("Salario novo: ", sal)