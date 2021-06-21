const prompt = require('prompt-sync')()

function main() {

    let matricula, nota1, nota2, nota3, media, aprovados = 0, reprovados = 0, totalalunos = 0
    while (matricula != 0) {
        matricula = Number(prompt('Matricula: '))
        if (matricula != 0) {
            nota1 = Number(prompt('Nota 1: '))
            nota2 = Number(prompt('Nota 2: '))
            nota3 = Number(prompt('Nota 3: '))

            media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

            if (media >= 7) {
                console.log("Aprovado")
                aprovados++
            } else if (media < 7) {
                console.log("Reprovado")
                reprovados++
            }
            totalalunos++
        }
    }
    console.log("Total de alunos:", totalalunos, "\nAprovados:", aprovados, "\nReprovados:", reprovados)
}
main()