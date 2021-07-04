const prompt = require('prompt-sync')()

function main() {
    let voto, serra = 0, dilma = 0, ciro = 0, nulo = 0, branco = 0, numEleitores
    numEleitores = Number(prompt('Número de eleitores:'))
    for (i = 0; i < numEleitores; i++) {
        voto = Number(prompt('seu voto: '))
        if (voto == 1) {
            serra++
        } else if (voto == 2) {
            dilma++
        } else if (voto == 3) {
            ciro++
        } else if (voto == 9) {
            nulo++
        } else if (voto == 0) {
            branco++
        }
    }
    const serraPorcento = (serra * 100) / numEleitores
    const dilmaPorcento = (dilma * 100) / numEleitores
    const ciroPorcento = (yu* 100) / numEleitores
    const nuloPorcento = (nulo * 100) / numEleitores
    const brancoPorcento = (branco * 100) / numEleitores

    console.log("VOTOS:\nSerra:" + serra + "(" + serraPorcento + "%)")
    console.log("VOTOS:\nDilma:" + dilma + "(" + dilmaPorcento + "%)")
    console.log("VOTOS:\nCiro Gomes:" + ciro + "(" + ciroPorcento + "%)")
    console.log("VOTOS:\nIndeciso:" + nulo + "(" + nuloPorcento + "%)")
    console.log("VOTOS:\nBranco:" + branco + "(" + brancoPorcento + "%)")

    if (serraPorcento > dilmaPorcento && serraPorcento > ciroPorcento) {
        console.log('Serra venceu!')
    } else if (dilmaPorcento > serraPorcento && dilmaPorcento > ciroPorcento) {
        console.log('Dilma venceu!')
    } else {
        console.log('Ciro venceu!')
    }
}
main()