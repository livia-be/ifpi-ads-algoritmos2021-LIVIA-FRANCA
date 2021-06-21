const prompt = require('prompt-sync')()

function main() {
    let investimento, taxa_juros, continuar = 'S', cont = 0

    while (continuar == 'S') {
        investimento = Number(prompt('Quanto investir?:'))
        taxa_juros = Number(prompt('Qual a taxa?:'))
        while (continuar == 'S') {
            while (cont < 12) {
                investimento += ((taxa_juros / 100) * investimento)
                cont++
            }
            console.log('Valor do investimento apos o ano:', investimento, '\nDeseja ver o ano seguinte? (S/N)')
            continuar = prompt('')
            cont = 0
        }
    }
}

main()