const prompt = require('prompt-sync')()
function main() {
    let data = prompt('Escreva data DD/MM/AAAA:')

    let dia = '', mes, ano = ''
    dia += data[0] + data[1]

    ano += data[6] + data[7] + data[8] + data[9]

    if (data[3] == 0 && data[4] == 1) {
        mes = 'Janeiro'
    } else if (data[3] == 0 && data[4] == 2) {
        mes = 'Fevereiro'
    } else if (data[3] == 0 && data[4] == 3) {
        mes = 'Março'
    } else if (data[3] == 0 && data[4] == 4) {
        mes = 'Abril'
    } else if (data[3] == 0 && data[4] == 5) {
        mes = 'Maio'
    } else if (data[3] == 0 && data[4] == 6) {
        mes = 'Junho'
    } else if (data[3] == 0 && data[4] == 7) {
        mes = 'Julho'
    } else if (data[3] == 0 && data[4] == 8) {
        mes = 'Agosto'
    } else if (data[3] == 0 && data[4] == 9) {
        mes = 'Setembro'
    } else if (data[3] == 1 && data[4] == 0) {
        mes = 'Outubro'
    } else if (data[3] == 1 && data[4] == 1) {
        mes = 'Novembro'
    } else if (data[3] == 1 && data[4] == 2) {
        mes = 'Dezembro'
    }

    console.log(dia, 'de', mes, 'de', ano)
}
main()