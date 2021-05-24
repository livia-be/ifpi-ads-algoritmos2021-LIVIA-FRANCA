//2 pontos quaisquer no plano, ponto1 (x1,y1) e calcular a distancia entre eles
const prompt = require('prompt-sync')()

//entrada

const x1 = Number(prompt("Insira x1: "))
const y1 = Number(prompt("Insira y1: "))

const x2 = Number(prompt("Insira x2: "))
const y2 = Number(prompt("Insira y2: "))

//processamento
const d = Math.sqrt((x2-x1)**2 + (y2 - y1)**2)

//saida
console.log('A distância entre os pontos 1 e 2 é: ',d)