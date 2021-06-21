const prompt = require('prompt-sync')()

function main() {
    let p1 = 0, p2 = 0, ponto

    while (p1 >= 0) {
        console.log("Jogador 1:", p1, "Jogador 2:", p2)
        ponto = Number(prompt(''))

        if (ponto == 1) {
            p1++
        } else if (ponto == 2) {
            p2++
        }

        if (p1 > p2 && p1 - p2 >= 2 && p1 >= 21) {
            console.log("Jogador 1 venceu.")
            break
        }
        else if (p2 > p1 && p2 - p1 >= 2 && p2 >= 21) {
            console.log("Jogador 2 venceu.")
            break
        }
    }
}
main()