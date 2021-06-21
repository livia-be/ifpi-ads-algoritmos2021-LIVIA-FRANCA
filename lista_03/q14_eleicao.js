const prompt = require('prompt-sync')()

function main() {
    //(Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
    //responder: indeciso=99, outros=98, nulo/branco=0.
    let voto, serra = 0, dilma = 0, ciro = 0, indeciso = 0, outros = 0, branco = 0, cont = 0
    while (voto != -1) {
        voto = Number(prompt('seu voto: '))
        if (voto != -1) {
            if (voto == 45) {
                serra++
            } else if (voto == 13) {
                dilma++
            } else if (voto == 23) {
                ciro++
            } else if (voto == 99) {
                indeciso++
            } else if (voto == 98) {
                outros++
            } else if (voto == 0) {
                branco++
            }
            cont++
        }
    }
    const serraPorcento = (serra * 100) / cont
    const dilmaPorcento = (dilma * 100) / cont
    const ciroPorcento = (ciro * 100) / cont
    const indecisoPorcento = (indeciso * 100) / cont
    const outrosPorcento = (outros * 100) / cont
    const brancoPorcento = (branco * 100) / cont

    console.log("VOTOS:\nSerra:" + serra + "(" + serraPorcento + "%)")
    console.log("VOTOS:\nDilma:" + dilma + "(" + dilmaPorcento + "%)")
    console.log("VOTOS:\nCiro Gomes:" + ciro + "(" + ciroPorcento + "%)")
    console.log("VOTOS:\nIndeciso:" + indeciso + "(" + indecisoPorcento + "%)")
    console.log("VOTOS:\nOutros:" + outros + "(" + outrosPorcento + "%)")
    console.log("VOTOS:\nBranco:" + branco + "(" + brancoPorcento + "%)")

    if (serraPorcento > 50 && dilmaPorcento > 50 && ciroPorcento > 50 && indecisoPorcento > 50 && outrosPorcento > 50 && brancoPorcento > 50) {
        console.log("Possibilidade de segundo turno.")
    }
}

main()