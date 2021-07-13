const prompt = require('prompt-sync')()
function main() {
    let parcela
    var valor = Number(prompt('Valor da compra:'))
    do {
        if (parcela < 1 || parcela > 12) {
            console.log('Parcelas somente de 1 a 12')
        }
        parcela = Number(prompt('Numero de parcelas:'))
    } while (parcela < 1 || parcela > 12)

    let formaPagamento
    if (parcela == 1) {
        formaPagamento = 1  // 1 - A vista
    } else {
        formaPagamento = 2 // 2 - A prazo 
    }

    console.log('Em quantos dias deseja receber o pagamento?\n1 - 2 Dias\n2 - 14 Dias\n3 - 31 Dias\nDigite a opcao:')
    var opcao = Number(prompt(''))
    var novoValor = decrementarValor(valor, parcela, formaPagamento, opcao)

    console.log(`Recebera ${novoValor}`)
}
main()

function decrementarValor(val, parc, formaPag, opc) {
    var valorReduzido, porcAV, porcAP
    
    if (opc == 1) {
        porcAV = 0.0439
        porcAP = 0.0499
    } else if (opc == 2) {
        porcAV = 0.0349
        porcAP = 0.0399
    } else if (opc == 3) {
        porcAV = 0.0299
        porcAP = 0.0349
    }

    if (formaPag == 1) {
        valorReduzido = val - ((val * porcAV) + 0.4)
    } else if (formaPag == 2) {
        valorReduzido = val - ((val * porcAP) + 0.4)
    }
    valorReduzido -= (0.01 * val) * parc
    return valorReduzido
}