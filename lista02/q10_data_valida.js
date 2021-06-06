const prompt = require("prompt-sync")();

function main() {
    var dia = Number(prompt('dia: '))
    var mes = Number(prompt('mes: '))
    var ano = Number(prompt('ano: '))

    if (dia > 31 || dia < 1 || mes > 12 || mes < 1) {
        console.log('data invalida')
    }

    if (ano % 4 == 0 & ano % 100 != 0) {//se o ano for bissexto
        if (mes == 2) {//se o mes for fevereiro
            if (dia > 29) {//se o dia for 30 ou 31, ou menor que 1
                console.log('data invalia')
            }
        }
    }
    else {
        if (mes == 2) {
            if (dia > 28)
                console.log('data invaldia')
        }
    }
}
main()