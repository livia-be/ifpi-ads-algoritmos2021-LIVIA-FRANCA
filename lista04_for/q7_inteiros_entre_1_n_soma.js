//Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
const prompt = require('prompt-sync')()

function main() {
   let i, soma = 0
   n = Number(prompt('Insira um número: '))

   for (i = n - 1; i > 1; i--) {
      console.log(i)
      soma += i
   }
   console.log("soma:", soma)
}
main()