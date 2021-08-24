// m/s para km/h | kmh = ms * 3,6
const prompt = require('prompt-sync')();

//entrada
const ms = Number(prompt('Vel em m/s: ')) 

//processamento
const km = (ms * 3.6)

//saída
console.log(km, 'km/h')