//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
const prompt = require('prompt-sync')()
function main() {
  let i, n
  do {
    if (n == 0) {
      console.log('0 nao tem multiplos')
    }
    n = Number(prompt('n: '))
  } while (n == 0)

  const limite_inf = Number(prompt('defina um valor limite mínimo: '))
  const limite_s = Number(prompt('defina um valor limite máximo: '))
  console.log('Multiplos de', n, 'no intervalo:', limite_inf, 'a', limite_s)
  for (i = limite_inf; i <= limite_s; i++) {
    if (i % n == 0) {
      console.log(i)
    }
  }
}
main()