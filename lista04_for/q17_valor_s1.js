/*Leia N, calcule e escreva o valor de S.
S = 1/1 + 1/2 + 1/3  ate 1/N */
const prompt = require('prompt-sync')()

function main() {
  let s = 0
  const n = Number(prompt('insira o valor máximo N:'))
  console.log('S = 1/1 + 1/2 + 1/3  até 1/N ')

  for (i = 1; i <= n; i++) {
    s += 1 / i
  }
  console.log('S = ', s)
}
main()