const prompt = require("prompt-sync")();

function main() {
    var num = Number(prompt('Numero decimal: '))

    const sub = Math.floor(num)

    if ((num - sub) > 0.5) {
        num = Math.ceil(num)
    }
    else if ((num - sub) < 0.5) {
        num = Math.floor(num)
    }
    console.log('numero arredondado:', num)
}
main()