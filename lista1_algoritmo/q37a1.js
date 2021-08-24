//
const prompt = require('prompt-sync')()

//entrada

const diasTotais = Number(prompt("Insira dias totais: "))

//processamento

const anos = Math.floor(diasTotais / 360)
const meses = Math.floor((diasTotais % 360) / 30)
const dias = diasTotais - ((anos * 360) + (meses * 30))

//saída
console.log('anos: ',anos,'meses:', meses,'dias: ', dias)