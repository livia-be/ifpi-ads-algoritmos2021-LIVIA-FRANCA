const prompt = require("prompt-sync")();

function main() {

    //entrada
    const nome_aluno = prompt('Aluno: ')
    const nota_1 = Number(prompt('Nota 1: '))
    const nota_2 = Number(prompt('Nota 2: '))
    const atividade = Number(prompt('Nota da atividade: '))

    //processamento
    const media_semestral = ((nota_1 * 0.2) + (nota_2 * 0.3) + (atividade * 0.1)) / (0.2 + 0.3 + 0.1)

    let aprovacao
    media_PF = (prova_final, media_semestral)

    if (media_semestral >= 7) {
        aprovacao = ('Situação:AP')
    } else if (media_semestral < 4) {
        aprovacao = ('Situação:RP')
    } else {
        aprovacao = ('Situação:PF')
        const prova_final = Number(prompt('Nota da Prova Final: '))
    }
    function media_PF(prova_final, media_semestral) {
        var media_final = (prova_final + media_semestral) / 2
        if (media_final >= 6) {
            console.log('Média final:', media_final.toFixed(1), "\n", 'Situação: AP')
        } else {
            console.log('Média final:', media_final.toFixed(1), "\n", 'Situação: RP')
            return media_PF
        }

    }
    //saída
    console.log('Aluno: ', nome_aluno, "\n", 'Média Semestra: ', media_semestral)
}
main()