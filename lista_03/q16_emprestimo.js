const prompt = require('prompt-sync')()

function main() {
    let emprestimo = 3000
    let cont = 1, cont2 = 0
    while (emprestimo > 200) {

        if (cont != 1 && cont != 7) {
            emprestimo -= 200
            emprestimo += emprestimo * 0.0085
        } else { emprestimo += emprestimo * 0.0085 }

        console.log(emprestimo)
        
        if (cont == 7) {
            cont = 0
        }
        cont++
        cont2++
    }
    console.log("Dias necessarios para pagar: ", cont2)
}

main()