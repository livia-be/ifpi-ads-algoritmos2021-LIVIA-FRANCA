/*Leia N, calcule e escreva o valor de S.
S = 1/N-1 + 2/N-2 + até N/1 */
const prompt = require('prompt-sync')()

function main() {
  let s = 0
  const n = Number(prompt('insira o valor máximo N:'))
  console.log('S = 1/N + 2/N-1 + até N/1 ')

  for (i = 1; i <= n; i++) {
    s += i / (n - (i - 1))
  }
  console.log('S = ', s)
}
main()