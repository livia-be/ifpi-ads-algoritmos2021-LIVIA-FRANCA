//soma dos elementos que compoe um numero de 4 digitos
const prompt = require('prompt-sync')()

//entrada

const x = prompt('Insira um numero de 4 digitos: ')

//processamento

let soma = (x[0]*1) + (x[1]*1) + (x[2]*1) + (x[3]*1)

//saida
 console.log('A soma dos elemtos que o compõem é : ',soma)