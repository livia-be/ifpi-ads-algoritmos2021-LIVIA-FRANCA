// (horas e minutos) -> minutos
const prompt = require ('prompt-sync')();

// Entrada
const h = Number (prompt('Digite as horas: '))
const min = Number (prompt('Digite os minutos: ')) 

// Processamento
const minTotais = (h * 60) + min

// Saída
console.log('Os minutos totais são: ', minTotais)