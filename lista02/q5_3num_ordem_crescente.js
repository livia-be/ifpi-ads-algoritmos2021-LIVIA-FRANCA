const prompt = require("prompt-sync")();
function main() {
    const a = Number(prompt('Num a: '))
    const b = Number(prompt('Num b: '))
    const c = Number(prompt('Num c: '))

    if (a == b & a == c) {
        console.log(a, b, c)
    }

    var menor = acha_menor(a, b, c)

    //////////////
    if (menor == a) {
        if (b < c)
            console.log(menor, b, c)
    }

    if (menor == a) {
        if (b > c)
            console.log(menor, c, b)
    }
    //////////////
    if (menor == b) {
        if (a < c)
            console.log(menor, a, c)
    }

    if (menor == b) {
        if (a > c)
            console.log(menor, c, a)
    }
    //////////////
    if (menor == c) {
        if (a < b)
            console.log(menor, a, b)
    }

    if (menor == c) {
        if (a > b)
            console.log(menor, b, a)
    }
}
main()
function acha_menor(a, b, c) {
    if (a < b & a < c)
        return a

    else if (b < a & b < c)
        return b

    else if (c < b & c < a)
        return c
}