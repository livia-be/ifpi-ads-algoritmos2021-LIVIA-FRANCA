const prompt = require('prompt-sync')()

function main() {
    let num, res, operacao
    do {
        if (operacao > 4 || operacao < 1) {
            console.log('Opcao invalida')
        }
        console.log('1 - SOMA\n2 - SUBTRACAO\n3 - MULTIPLICACAO\n4 - DIVISAO\n:')
        operacao = Number(prompt('Escolha a operacao:'))
    } while (operacao > 4 || operacao < 1)

    for (num = 1; num < 11; num++) {
        console.log("=====TABUADA DO", num, "=====")
        if (operacao == 1) {
            soma(num);
        } else if (operacao == 2) {
            subtracao(num)
        } else if (operacao == 3) {
            multiplicacao(num)
        } else if (operacao == 4) {
            divisao(num)
        }
    }
}
main()

function soma(num) {
    for (let i = 1; i < 11; i++) {
        res = num + i
        console.log(num, "+", i, "=", res)
    }
}

function subtracao(num) {
    for (let i = 1; i < 11; i++) {
        res = i - num
        console.log(i, "-", num, "=", res)
    }
}

function multiplicacao(num) {
    for (let i = 1; i < 11; i++) {
        res = num * i
        console.log(num, "*", i, "=", res)
    }
}

function divisao(num) {
    for (let i = 1; i < 11; i++) {
        res = i / num
        console.log(i, "/", num, "=", res)
    }
}