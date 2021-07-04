const prompt = require('prompt-sync')()

function main() {
    let num, quad, maiorQuad
    num = Number(prompt('Num:'))
    for (let i = 1; i < num; i++) {
        quad = i
        quad = quad * quad
        console.log(quad)
        if (quad <= num) {
            maiorQuad = quad
        } else if (quad > num) {
            break
        }
    }
    console.log('Maior quadrao menor ou igual a Num:', maiorQuad)
}
main()