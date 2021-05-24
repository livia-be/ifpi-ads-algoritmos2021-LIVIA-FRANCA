//sistema de equaçoes
const prompt = require('prompt-sync')()

//entrada

var a = Number(prompt("Insira A: "))
var b = Number(prompt("Insira B: "))
var c = Number(prompt("Insira C: "))
var d = Number(prompt("Insira D: "))
var e = Number(prompt("Insira E: "))
var f = Number(prompt("Insira F: "))

//processamento

var x = (c*e - b*f)/(a*e - b*d)
var y = (a*f - c*d)/(a*e - b*d)

//saida
console.log('x= ',x,'y= ',y)

