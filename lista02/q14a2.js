const prompt = require("prompt-sync")();
function main() {
    const num1 = Number(prompt('numero 1: '))
    const num2 = Number(prompt('numero 2: '))
    const num3 = Number(prompt('numero 3: '))
    const num4 = Number(prompt('numero 4: '))
    const num5 = Number(prompt('numero 5: '))

    const media = media_func(num1, num2, num3, num4, num5)

    if (num1 > media)
        console.log('numero: ', num1, 'acima da media: ', media)
    if (num2 > media)
        console.log('numero: ', num2, 'acima da media: ', media)
    if (num3 > media)
        console.log('numero: ', num3, 'acima da media: ', media)
    if (num4 > media)
        console.log('numero: ', num4, 'acima da media: ', media)
    if (num5 > media)
        console.log('numero: ', num5, 'acima da media: ', media)

    console.log('Media: ', media)
}
main()
function media_func(a, b, c, d, e) {
    const med = (a + b + c + d + e) / 5
    return med
}