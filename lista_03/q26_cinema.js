const prompt = require('prompt-sync')()

function main() {

    let idade = 1, opniao, mediaIdadeOtimo = 0, quantidade_regulares = 0, percent_bom, quantidade_bons = 0,
        quantidade_otimos = 0, votos_total = 0, quantidade_pessimo
    while (idade > 0) {
        idade = Number(prompt('Sua idade:'))
        if (idade > 0) {
            opniao = Number(prompt('nota para o filme: '))
            if (opniao == 1) {
                mediaIdadeOtimo += idade
                quantidade_otimos++
                votos_total++
            } else if (opniao == 2) {
                quantidade_bons++
                votos_total++
            } else if (opniao == 3) {
                quantidade_regulares++
                votos_total++
            } else {
                quantidade_pessimo++
                votos_total++
            }
        }

    }
    mediaIdadeOtimo = mediaIdadeOtimo / quantidade_otimos
    percent_bom = quantidade_bons * 100 / votos_total

    console.log('media das idades das pessoas que responderam otimo: ', mediaIdadeOtimo)
    console.log('quantidade de pessoas que responderam regular: ', quantidade_regulares)
    console.log('percentual de pessoas que responderam bom:', percent_bom)
}


main()