const prompt = require("prompt-sync")();

function main() {
    var x1 = Number(prompt('x1: '))
    var y1 = Number(prompt('y1: '))

    var x2 = Number(prompt('x2: '))
    var y2 = Number(prompt('y2: '))


    if (x1 < 0) {
        x1 = (x1 * (-1))
    }

    if (y1 < 0) {
        y1 = (y1 * (-1))
    }

    if (x2 < 0) {
        x2 = (x2 * (-1))
    }

    if (y2 < 0) {
        y2 = (y2 * (-1))
    }

    const l1 = x1 + x2
    const l2 = y1 + y2

    const area = l1 * l2

    console.log('Área = ', area)
}
main()
