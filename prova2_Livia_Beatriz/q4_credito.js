const prompt = require('prompt-sync')()
function main() {
    console.log('Escolha o valor do emprestimo:\n1 - 40.000\n2 - 60.000\n3 - 81.000')
    let opc = Number(prompt(''))
    let emprestimo, parcela
    if (opc == 1) {
        emprestimo = 40000
    } else if (opc == 2) {
        emprestimo = 60000
    } else if (opc == 3) {
        emprestimo = 81000
    }
    console.log('Escolha o valor de pagamento de parcela:\n1 - 1000\n2 - 1200\n3 - 1500')
    opc = Number(prompt(''))
    if (opc == 1) {
        parcela = 1000
    } else if (opc == 2) {
        parcela = 1200
    } else if (opc == 3) {
        parcela = 1500
    }
    let i
    for (i = 1; ; i++) {

        if (emprestimo < parcela) {
            parcela = emprestimo
        }

        emprestimo -= parcela
        let juros = 0.01 * emprestimo
        emprestimo += juros
        console.log(`Juros do mes: ${juros.toFixed(2)}\nParcela do mes: ${parcela.toFixed(2)}\nSaldo anterior: ${(emprestimo + parcela + - juros).toFixed(2)}\n Saldo atual: ${emprestimo}`)
        console.log('====================')
        if (emprestimo <= 0) {
            break
        }
    }
    console.log(`Numero de parcelas: ${i}`)
}
main()