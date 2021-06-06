const prompt = require("prompt-sync")();
function main() {
    const a = Number(prompt('Num a: '))
    const b = Number(prompt('Num b: '))
    const c = Number(prompt('Num c: '))

    if (a == b & a == c) { //        & == "e"            || == "ou"
        console.log("todos são iguais")
    }
    else if (a == b)
        console.log("a:", a, "e b:", b, " são iguais.")

    else if (a == c)
        console.log("a:", a, "e c:", c, " são iguais.")

    else if (b == c)
        console.log("b:", b, "e c:", c, " são iguais.")

    else if (a != b & a != c) // != é "diferente". Esses argumentos são desnecessários
        console.log("Nenhum é igual")
}
main()