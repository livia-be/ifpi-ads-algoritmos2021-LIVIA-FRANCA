const prompt = require("prompt-sync")();

function main() {
    //entrada
    const media_14_dias = Number(prompt('Insira a média de casos dos últimos 14 dias: '))
    const media_hoje = Number(prompt('Insira a média de casos hoje: '))
    //processamento

    let percentual = ((media_hoje * 100) / media_14_dias)
    percentual = percentual - 100
    const variacao = checagem_variacao(percentual)

    //saída

    console.log('A variação percentual de casos foi: ', percentual, '%, ', variacao)

    function checagem_variacao(resultado) {
        if (resultado > -15 && resultado < 15) {
            return 'os casos estão em estabilidade'
        } else if (resultado < -15) {
            return 'os casos estão em queda'
        } else {
            return 'os casos estão em alta'
        }
    }

}
main()