const prompt = require("prompt-sync")();
function main() {
    const l1 = Number(prompt('lado 1: '))
    const l2 = Number(prompt('lado 2: '))
    const l3 = Number(prompt('lado 3: '))

    if (l1 + l2 < l3 || l1 + l3 < l2 || l2 + l3 < l1) {  // || é "ou"
        console.log('Lados invalidos')
    }
    else {
        acha_triangulo(l1, l2, l3)
    }
}
main()
function acha_triangulo(l1, l2, l3) {
    if (l1 == l2 & l1 == l3) {
        console.log('triangulo equilatero')
    }
    else if (l1 == l2 & l1 != l3 || l2 == l3 & l3 != l1) {
        console.log('triangulo isosceles')
    }
    else if (l1 != l2 & l2 != l3 & l1 != l3) {
        console.log('triangulo escaleno')
    }
    return;
}

