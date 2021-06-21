const prompt = require('prompt-sync')()

function main() {
    let nome, preco, quantia
    while (nome != 'FIM') {
        nome = prompt('Nome do produto:')
        if (nome != 'FIM') {
            preco = Number(prompt('Preco do produto:'))
            quantia = Number(prompt('Quantidade:'))
            if (quantia <= 10) {
                console.log('Pague o preço normal, unidade:', preco, 'Total:', preco * quantia)
            } else if (quantia >= 11 <= 20) {
                preco = preco - (preco * 0.1)
                console.log('Desconto de 10%, unidade:', preco, 'Total:', preco * quantia)
            } else if (quantia >= 21 <= 50) {
                preco = preco - (preco * 0.2)
                console.log('Desconto de 20%, unidade:', preco, 'Total:', preco * quantia)
            } else if (quantia > 50) {
                preco = preco - (preco * 0.5)
                console.log('Desconto de 50%, unidade:', preco, 'Total:', preco * quantia)
            }
        }
    }
}

main()