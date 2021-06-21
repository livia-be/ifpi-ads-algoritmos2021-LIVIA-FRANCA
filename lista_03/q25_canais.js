const prompt = require('prompt-sync')()

function main() {

    let AudCanal2 = 0, AudCanal4 = 0, AudCanal5 = 0, AudCanal7 = 0, AudCanal10 = 0, audienciaTotal = 0, canal, aux
    let pc2, pc4, pc5, pc7, pc10 // porcentagens

    while (canal != 0) {
        if (canal != 0) {
            canal = Number(prompt('Qual o canal?:'))
            if (canal == 2) {
                aux = Number(prompt('Quantas pessoas assistindo o canal 2?:'))
                AudCanal2 += aux
                audienciaTotal += aux
            } else if (canal == 4) {
                aux = Number(prompt('Quantas pessoas assistindo o canal 4?:'))
                AudCanal4 += aux
                audienciaTotal += aux
            } else if (canal == 5) {
                aux = Number(prompt('Quantas pessoas assistindo o canal 5?:'))
                AudCanal5 += aux
                audienciaTotal += aux
            } else if (canal == 7) {
                aux = Number(prompt('Quantas pessoas assistindo o canal 7?:'))
                AudCanal7 += aux
                audienciaTotal += aux
            } else if (canal == 10) {
                aux = Number(prompt('Quantas pessoas assistindo o canal 10?:'))
                AudCanal10 += aux
                audienciaTotal += aux
            }
        }
    }
    pc2 = (AudCanal2 * 100) / audienciaTotal
    pc4 = (AudCanal4 * 100) / audienciaTotal
    pc5 = (AudCanal5 * 100) / audienciaTotal
    pc7 = (AudCanal7 * 100) / audienciaTotal
    pc10 = (AudCanal10 * 100) / audienciaTotal

    console.log("Canal 2:", AudCanal2, "telespectadores, (", pc2, "%)")
    console.log("Canal 4:", AudCanal4, "telespectadores, (", pc4, "%)")
    console.log("Canal 5:", AudCanal5, "telespectadores, (", pc5, "%)")
    console.log("Canal 7:", AudCanal7, "telespectadores, (", pc7, "%)")
    console.log("Canal 10:", AudCanal10, "telespectadores, (", pc10, "%)")
    console.log("Audicencia total:", audienciaTotal)

    // (AC2 * 100) / AT


}
main()