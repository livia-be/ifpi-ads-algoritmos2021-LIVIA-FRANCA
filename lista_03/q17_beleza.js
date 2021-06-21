const prompt = require('prompt-sync')()

function main() {
    let nome, altura, peso
    let maisAlta = 0, maisBaixa = 9999, maisMagra = 9999, maisGorda = 0 // <- valores
    let nomeMaisAlta, nomeMaisBaixa, nomeMaisMagra, nomeMaisGorda // <- nomes

    while (nome != 'FIM') {
        nome = prompt('Nome:')
        if (nome != 'FIM') {
            altura = Number(prompt('Altura:'))
            if (altura > maisAlta) {
                maisAlta = altura
                nomeMaisAlta = nome
            }
            if (altura < maisBaixa) {
                maisBaixa = altura
                nomeMaisBaixa = nome
            }
            peso = Number(prompt('Peso:'))
            if (peso > maisGorda) {
                maisGorda = peso
                nomeMaisGorda = nome
            }
            if (peso < maisMagra) {
                maisMagra = peso
                nomeMaisMagra = nome
            }
        }
    }
    console.log("Mais alta:", nomeMaisAlta, "(", maisAlta, ")")
    console.log("Mais baixa:", nomeMaisBaixa, "(", maisBaixa, ")")
    console.log("Mais gorda:", nomeMaisGorda, "(", maisGorda, ")")
    console.log("Mais magra:", nomeMaisMagra, "(", maisMagra, ")")
}

main()