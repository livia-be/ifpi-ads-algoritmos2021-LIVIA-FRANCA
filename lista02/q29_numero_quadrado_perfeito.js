//ACHA NUMERO QUADRADO PERFEITO
//ALUNA: LÍVIA BEATRIZ
const prompt = require("prompt-sync")();

function main() {

    const num = Number(prompt('Insira um número com 4 dígitos: '))
   
    var dezena1 = Math.floor(num / 100)
    var dezena2 = num - dezena1 * 100

    const raizNum = Math.sqrt(num)

    if (raizNum == (dezena1 + dezena2)) {
        console.log("É um quadrado perfeito.", num, "tem raiz", raizNum, "que é igual a", dezena1, "+", dezena2, "=", dezena1 + dezena2)
    }
    else {
        console.log("Não é um quadrado perfeito.", num, "tem raiz", raizNum, "que não é igual a", dezena1, "+", dezena2, "=", dezena1 + dezena2)
    }
}
main()
