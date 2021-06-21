const prompt = require('prompt-sync')()

function main() {
    let numContainers = Number(prompt('Número de containers: '))
    let pesoCadaContainer = Number(prompt('Peso de cada container: '))
    const pesoTotalContainers = numContainers * pesoCadaContainer

    let numBilhete, qntBagagem, pesoPassageiros = 0, qntPassageiros = 0, combustivel

    while (numBilhete != 0) {
        numBilhete = Number(prompt('Numero do bilhete: '))
        if (numBilhete != 0) {
            qntBagagem = Number(prompt('Quantidade de bagagens: '))
            pesoPassageiros = 70 + 10 * qntBagagem
            qntPassageiros++
        }
    }
    combustivel = 500000 - (pesoTotalContainers + pesoPassageiros)
    //a quantidade de passageiros, a quantidade total de volume de bagagem, 
    //o peso dos passageiros, o peso da carga, a quantidade possível de combustível,
    console.log("Passageiros:", qntPassageiros, "\nBagagens:", qntBagagem, "\nPeso dos passageiros:",
        pesoPassageiros, "\nPeso da carga:", pesoTotalContainers, "\nCombustível:", combustivel)

    if (combustivel < 0) {
        console.log('Nao pode decolar')
    }else{console.log('\nPode decolar.')}
}

main()