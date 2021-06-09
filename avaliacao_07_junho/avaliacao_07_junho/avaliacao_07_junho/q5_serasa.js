const prompt = require("prompt-sync")();

function main() {

    //entrada
    const valor_a = Number(prompt('Valor do critério 1: '))
    const valor_b = Number(prompt('Valor do critério 2: '))
    const valor_c = Number(prompt('Valor do critério 3: '))


    ///////////////
    const scoret1_categoria = score1(valor_a, valor_b, valor_c)
    const score2_categoria = score2(valor_a, valor_b, valor_c)

    score1 = (valor_a, valor_b, valor_c)
    score2 = (valor_a, valor_b, valor_c)

    //processamento e saída
    function score1(valor_a, valor_b, valor_c) {
        const score1 = (valor_a * 2.6) + (valor_b * 5.7) + (valor_c * 1.7)
        if (score1 > 800 && score1 <= 1000) {
            console.log('Score 1.0 é: ', score1, '...seu score é muito bom')
        } else if (score1 > 600 && score1 <= 800) {
            console.log('Score 1.0 é:', score1, '...seu score é bom')
        } else if (score1 > 400 && score1 < 600) {
            console.log('Score 1.0 é: ', score1, '...seu score é regular')
        } else {
            console.log('Score 1.0 é: ', score1, '...seu score é ruim')
            return score1
        }
    }

    function score2(valor_a, valor_b, valor_c) {
        const score2 = (valor_a * 6.2) + (valor_b * 1.9) + (valor_c * 1.9)
        if (score2 > 700 && score2 <= 1000) {
            console.log('Score 2.0 é: ', score2, '...seu score é muito bom')
        } else if (score2 > 500 && score2 <= 700) {
            console.log('Score 2.0 é: ', score2, '...seu score é bom')
        } else if (score2 > 300 && score2 <= 500) {
            console.log('Score 2.0 é: ', score2, '...seu score é regular')
        } else {
            console.log('Score 2.0: ', score2, '...seu score é ruim')
            return score2
        }
    }


}
main()