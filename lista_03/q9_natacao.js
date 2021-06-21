const prompt = require('prompt-sync')()

function main() {
    let prova, nadadores, nome, clas, tempo, clube, pontos, cont = 0, pontosA = 0, pontosB = 0

    while (prova != 0 || nadadores != 0) {
        prova = Number(prompt('Número da prova: '))
        nadadores = Number(prompt('Quantidade de nadadores: '))

        if (prova != 0 || nadadores != 0) {
            while (cont < nadadores) {
                nome = prompt('Nome do nadador: ')
                clas = Number(prompt('Classificação do nadador: '))
                tempo = Number(prompt('Tempo do nadador (segundos): '))
                clube = prompt('Clube do nadador: ')

                if (clas == 1) {
                    pontos = 9
                }
                else if (clas == 2) {
                    pontos = 6
                }
                else if (clas == 3) {
                    pontos = 4
                }
                else if (clas == 4) {
                    pontos = 3
                }
                else {
                    pontos = 0
                }

                if (clube == 'a') {
                    pontosA += pontos
                }
                else if (clube == 'b') {
                    pontosB += pontos
                }
                console.log("Nadador", nome, "ficou em", clas, "lugar e adicionou", pontos, "pontos ao clube", clube)
                cont++
            }
            console.log("Pontos do clube A:", pontosA, "Pontos do clube B:", pontosB)
        }
    }
}

main()