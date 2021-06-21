const prompt = require('prompt-sync')()

function main() {

    let sexo, idade, estado_civil, quantidade_homens = 0, quantidade_mulheres = 0, cont = 0, med_idade_mulheres = 0, med_idade_homens = 0
    percent_homens_solteiros = 0, percent_mulheres_solteiras = 0, quant_mulheres_divorc_acima_30 = 0
    const quant = 3
    while (cont < quant) {
        console.log('===Dados da pessoa ', cont + 1, '===')
        sexo = Number(prompt('Sexo:'))
        idade = Number(prompt('Idade:'))
        estado_civil = Number(prompt('Estado civil:'))
        if (sexo == 1) {
            med_idade_homens += idade
            quantidade_homens++
        } else if (sexo == 2) {
            med_idade_mulheres += idade
            quantidade_mulheres++
        }
        if (sexo == 1 && estado_civil == 2) {
            percent_homens_solteiros++
        }
        if (sexo == 2 && estado_civil == 2) {
            percent_mulheres_solteiras++
        }
        if (sexo == 2 && estado_civil == 3 && idade > 30) {
            quant_mulheres_divorc_acima_30++
        }
        cont++
    }
    med_idade_homens = med_idade_homens / quantidade_homens
    med_idade_mulheres = med_idade_mulheres / quantidade_mulheres
    percent_homens_solteiros = (percent_homens_solteiros * 100) / quant
    percent_mulheres_solteiras = (percent_mulheres_solteiras * 100) / quant

    console.log('Media das idades dos homens:', med_idade_homens)
    console.log('Media das idades das mulheres:', med_idade_mulheres)
    console.log('Percentual de homens solteiros:', percent_homens_solteiros)
    console.log('Percentual de mulheres solteiras:', percent_mulheres_solteiras)
    console.log('Quantidade de mulheres divorciadas acima de 30:', quant_mulheres_divorc_acima_30)

}
main()