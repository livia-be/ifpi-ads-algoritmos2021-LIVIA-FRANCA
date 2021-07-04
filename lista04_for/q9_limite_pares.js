const prompt = require('prompt-sync')()
function main() {
    let i

    const limite_inf = Number(prompt('defina um valor limite mínimo: '))
    const limite_sup = Number(prompt('defina um valor limite máximo: '))
    console.log('pares')
    for (i = limite_inf; i <= limite_sup; i++) {
        if (i % 2 != 0) {
            continue
        }
        console.log(i)
    }
}
main()