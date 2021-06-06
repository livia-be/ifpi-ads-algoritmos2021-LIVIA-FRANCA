const prompt = require("prompt-sync")();

function main() {
    const l1 = prompt('lado 1: ')
    const l2 = prompt('lado 2: ')
    const l3 = prompt('lado 3: ')

    const hipo = Math.max(l1, l2, l3)
    if (l1 == hipo) {
        console.log('Hipotenusa:', hipo, 'Catetos: ', l2, l3)
    }
    else if (l2 == hipo) {
        console.log('Hipotenusa:', hipo, 'Catetos: ', l1, l3)
    }
    else if (l3 == hipo) {
        console.log('Hipotenusa:', hipo, 'Catetos:', l2, l1)
    }
}
main()