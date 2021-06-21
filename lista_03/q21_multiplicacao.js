const prompt = require('prompt-sync')()

function main() {
    //   5     2       10          2
    let num1, num2, cont = 1, cont2 = 0
    num1 = Number(prompt('Numero:'))
    num2 = Number(prompt('Multiplicado por:'))

    while (cont >= 1) {
        cont++
        if (num1 == 0) {
            console.log(num1, "*", num2, "= 0")
            return
        }
        else if (num1 == 1) {
            console.log(num1, "*", num2, "=", num2)
            return
        }
        else if (cont % num1 == 0) {
            cont2++
        }
        if (cont2 == num2) {
            break
        }
    }
    console.log(num1, "*", num2, "=", cont)
}
main()