const prompt = require('prompt-sync')()

function main() {
    const aleatorio = Math.floor((Math.random() * (10 - 1) + 1))
    //console.log(aleatorio)
    let x, cont = 0
    while (aleatorio) {
        x = Number(prompt('Tente acertar o numero (1 a 10):'))
        if (x < aleatorio) {
            console.log('é maior')
        } else if (x > aleatorio) {
            console.log('é menor')
        } else {
            console.log('acertou mizeravi,', cont + 1, 'tentativas')
            break
        }
        cont++
    }
}

main()