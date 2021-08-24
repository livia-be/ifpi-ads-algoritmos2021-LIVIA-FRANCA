//
const prompt = require('prompt-sync')()

const n1 = Number(prompt('Nota 1= '))
const n2 = Number(prompt('Nota 2= '))
const n3 = Number(prompt('Nota 3= '))
const mp1 = Number(prompt('Peso Nota 1= '))
const mp2 = Number(prompt('Peso Nota 2= '))
const mp3 = Number(prompt('Peso Nota 3= '))

const media1 = (n1*mp1)+(n2*mp2)+(n3*mp3)
const media2 = mp1+mp2+mp3
const media3 = media1/media2

console.log('Média = ',media3)