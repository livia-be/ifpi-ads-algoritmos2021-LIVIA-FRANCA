
const prompt = require("prompt-sync")();

function main() {

    const num = Number(prompt('Insira um número de 4 digitos: '))
    if (num >= 1000 & num <= 9999) {
        var dezena1 = Math.floor(num / 100)
        var dezena2 = num - dezena1 * 100

        const raizNum = Math.sqrt(num)

        if (raizNum == (dezena1 + dezena2)) {
            console.log(num, "->", "dividindo:", dezena1, "e", dezena2, "-> somando temos", dezena1 + dezena2, "->", dezena1 + dezena2, "² =", num)
        }
        else {
            console.log("Não é um quadrado perfeito.")
        }
    }
    else {
        console.log("Numero invalido")
    }
}
main()
