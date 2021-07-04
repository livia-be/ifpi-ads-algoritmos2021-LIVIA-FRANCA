const prompt = require('prompt-sync')()

function main() {
    let i, fatorial
    num = Number(prompt('Insira um número: '))

    for (i = num - 1; i > 1; i--) {
        num = num * i
        if (i != 2) {
            continue
        }
        console.log(num)
    }
}
main()