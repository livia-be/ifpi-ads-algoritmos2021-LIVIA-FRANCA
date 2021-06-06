const prompt = require("prompt-sync")();
function main() {
    const a = Number(prompt('Num a: '))
    const b = Number(prompt('Num b: '))
    const c = Number(prompt('Num c: '))

    if (a > b & a > c)
        console.log("numero a:", a, "é o maior de todos")

    else if (b > a & b > c)
        console.log("numero b:", b, "é o maior de todos")

    else if (c > b & c > a)
        console.log("numero c:", c, "é o maior de todos")

    else
        console.log('Todos são iguais')
}
main()