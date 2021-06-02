const prompt = require("prompt-sync")();

function main() {
    var hora1 = Number(prompt('Hora incial: '))
    var min1 = Number(prompt('Minutos inciais: '))
    var hora2 = Number(prompt('Hora final: '))
    var min2 = Number(prompt('Minutos finais: '))

    if (hora2 >= hora1 & min2 >= min1) {
        var horaFinal = hora2 - hora1
        var minFinal = min2 - min1
        console.log('Horas:', horaFinal, 'Minutos:', minFinal)
    }
    if (hora2 <= hora1 & min2 <= min1) {
        var horaFinal = (hora2 - hora1) * (-1)
        var minFinal = min2 - min1
        horaFinal = horaFinal + 22
        console.log('Horas:', horaFinal, 'Minutos:', minFinal)
    }

}
main()