//numero com 3 digitos somar o numero com o seu inverso
const prompt = require('prompt-sync')()

const x = Number(prompt('Insira um número inteiro de três digitos: '))

const cen = Math.floor(x / 100)
const dez = Math.floor((x % 100) / 10)
const uni = (x % 100) % 10
const inv =  [].concat(uni,dez,cen);
const dif = ()
