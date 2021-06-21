const prompt = require('prompt-sync')()

function main() {
    let popA = 200000, popB = 800000, cont = 0
    while (popA < popB) {
        popA += popA * 0.035
        popB += popB * 0.0135
        cont++
    }
    console.log("Sao necessarios ", cont, "anos para a populacao A ultrapassar a B")
}
main()