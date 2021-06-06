const prompt = require("prompt-sync")();

function main() {
    const nota1 = Number(prompt('Nota1: '))
    const nota2 = Number(prompt('Nota2: '))


    const media = calcula_media(nota1, nota2)

    if (media < 7) {
        const provaFinal = Number(prompt('provaFinal: '))
        const mediaFinal = calcula_media_final(nota1, nota2, provaFinal)
        if (mediaFinal < 5) {
            console.log('reprovado')
        } else {
            console.log('aprovado')
        }
    }
    else {
        console.log('aprovado')
    }
}
main()

function calcula_media(a, b) {
    const med = (a + b) / 2
    return med
}

function calcula_media_final(a, b, c) {
    const medFinal = (a + b + c) / 3
    return medFinal
}