const prompt = require("prompt-sync")();
function main() {
    const an1 = Number(prompt('ângulo 1: '))
    const an2 = Number(prompt('ângulo 2: '))
    const an3 = Number(prompt('ângulo 3: '))

    if (an1 + an2 + an3 == 180) {
        define_triangulo(an1, an2, an3)
    }
    else {
        console.log('Angulos invalidos')
    }
}
main()
function define_triangulo(an1, an2, an3) {
    if (an1 < 90 & an2 < 90 & an3 < 90)
        console.log('triangulo acutangulo')
    else if (an1 == 90 || an2 == 90 || an3 == 90)
        console.log('triangulo retangulo')
    else if (an1 > 90 || an2 > 90 || an3 > 90)
        console.log('triangulo obtusangulo')
    return;
}
