const prompt = require('prompt-sync')()
function main() {
    let i

    const limite_inf = Number(prompt('defina um valor limite mínimo: '))
    const limite_sup = Number(prompt('defina um valor limite máximo: '))
    console.log('primos')
    for (i = limite_inf; i <= limite_sup; i++) {
        let flag = 0

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1
            }
        }
        if (i > 1 && flag != 1) {
            console.log(i)
        }
    }
}
main()