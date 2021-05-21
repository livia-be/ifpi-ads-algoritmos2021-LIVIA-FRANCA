//km->m
const prompt = require('prompt-sync')()

//entrada
 const km = Number(prompt('Insira um valor para km: '))

 //processamento
 const m = (km*1000)

 //saída
 console.log('O valor em metros é= ',m)