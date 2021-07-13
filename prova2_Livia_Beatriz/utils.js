const prompt = require('prompt-sync')()

function media(vet) {
    let soma = 0, media, i
    for (i = 0; i < vet.length; i++) {
        soma += vet[i]
    }
    media = soma / i + 1
    return media
}

function maiorV(vet) {
    let maior = 0
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > maior) {
            maior = vet[i]
        }
    }
    return maior
}

function menorV(vet) {
    let menor = 999999999
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < menor) {
            menor = vet[i]
        }
    }
    return menor
}

function qntPos(vet) {
    let qntPos = 0
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= 0) {
            qntPos++
        }
    }
    return qntPos
}

function qntNeg(vet) {
    let qntNeg = 0
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < 0) {
            qntNeg++
        }
    }
    return qntNeg
}

function verificar_repetidos(vet) {
    var atual = null;
    var cnt = 0;
    for (var i = 0; i < vet.length; i++) {
        if (vet[i] != atual) {
            atual = vet[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }

    return cnt
}

module.exports = {
    media, maiorV, menorV, qntPos, qntNeg, verificar_repetidos
}