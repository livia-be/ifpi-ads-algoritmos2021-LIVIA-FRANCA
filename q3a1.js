// (Minutos)-> horas e minutos
const prompt = require("prompt-sync")();

//Entrada
const minIns = Number(prompt('digite minutos: ')) //minutos inseridos

//Processamento
var horas = minIns / 60
horas = Math.floor(horas)

//Saída
const minutos = minIns % 60

console.log(horas, 'h:', minutos,'m')