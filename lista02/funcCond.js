//aumentar o salario em 50% se for menor que 1000
//se for IGUAL a 1000, aumenta em 75%
//aumentar em 25% se for maior que mil

const prompt = require("prompt-sync")();

const salarioInicial = Number(prompt('salario: '))

const salarioFinal = aumento_salario(salarioInicial)

console.log(salarioFinal)



function aumento_salario(salario){

if(salario < 1000) //se
var aumento = salario + 50/100*salario

else if(salario > 1000) // se nao, mas na verdade for...
aumento = salario + 25/100*salario

else//se nao foi nada doq foi antes (se não)
aumento = salario + 75/100*salario
 
return aumento

}

