const prompt = require("prompt-sync")();

function main() {

    const leitura_atual = Number(prompt('Leitura Atual: '))
    const leitura_anterior = Number(prompt('Leitura Anterior: '))

    let variaçao_consumo = leitura_atual - leitura_anterior
    let consumo_total = 0
    if (variaçao_consumo <= 30) {
        consumo_total = 0
    } else if (variaçao_consumo > 30 && variaçao_consumo <= 100) {
        consumo_total = (variaçao_consumo * 0.59)
    } else {
        consumo_total = (variaçao_consumo * 0.75)
    }
    const icms = (consumo_total * 0.25)
    const pis_confis = consumo_total * 0.15
    let iluminacao_publica = consumo_total * 0.06

    if (variaçao_consumo < 80) {
        iluminacao_publica = 0
    }

    const bandeiras = Math.trunc(variaçao_consumo / 100) * 8
    const valor_a_pagar = consumo_total + pis_confis + icms + iluminacao_publica + bandeiras

    console.log('Consumo: ', variaçao_consumo, 'KWh')
    console.log('Valor faturado: R$:', consumo_total.toFixed(2))
    console.log('Bandeira: R$:', bandeiras.toFixed(2))
    console.log('ICMS: R$:', icms.toFixed(2))
    console.log('PIS/CONFIS:R$:', pis_confis.toFixed(2))
    console.log('Taxa de iluminação pública:R$: ', iluminacao_publica.toFixed(2))
    console.log('Valor total: R$: ',valor_a_pagar.toFixed(2))

}
main()