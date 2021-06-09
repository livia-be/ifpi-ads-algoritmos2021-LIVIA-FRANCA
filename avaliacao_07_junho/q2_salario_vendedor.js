const prompt = require("prompt-sync")();

function main() {

    //entrada

    const nomeVendedor = prompt('Nome do vendedor: ')
    const vendastotais = Number(prompt('Valor total de vendas no mês: '))
   
    //processamento
    const salarioFixo = 1100
    let comissao = 0


    if (vendastotais > 5000 && vendastotais <= 30000) {
        comissao = (vendastotais - 5000) * 5 / 100
    } else if (vendastotais > 10000 && vendastotais <= 30000) {
        comissao = (vendastotais - 5000) * 5 / 100 + (vendastotais - 10000) * 10 / 1000
    } else if (vendastotais > 30000) {
        comissao = vendastotais * (20 / 100)
    } else if (vendastotais <= 5000) {
        comissao = 'Não tera comissão'
    }

    const salarioFinal = comissao + salarioFixo
    
    //saída
    console.log('Vendedor: ', nomeVendedor, "\n", 'Valor total de vendas no mês: ', vendastotais, "\n", 'Comissão de vendas: R$:', comissao, "\n", 'Salário fixo: R$:', salarioFixo, "\n", 'Salário final: R$:', salarioFinal)
}
main()

