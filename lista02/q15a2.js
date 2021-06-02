const prompt = require("prompt-sync")();
function main() {
    const horas1 = Number(prompt('Horas do prof 1: '))
    const preco1 = Number(prompt('Preco por hora do prof 1: '))

    const horas2 = Number(prompt('Horas do prof 2: '))
    const preco2 = Number(prompt('Preco por hora do prof 2: '))

    const sal1 = calcula_salario(horas1, preco1)
    const sal2 = calcula_salario(horas2, preco2)

    if (sal1 > sal2) {
        console.log('professor 1 recebe mais', '(', sal1, ')', 'que o prof 2', '(', sal2, ')')
    }
    else if (sal1 < sal2) {
        console.log('professor 2 recebe mais', '(', sal2, ')', 'que o prof 1', '(', sal1, ')')
    }
    else {
        console.log('Ambos recebem a mesma quantia:', sal1)
    }
}
main()

function calcula_salario(hora, preco) {
    const sal = hora * preco
    return sal
}