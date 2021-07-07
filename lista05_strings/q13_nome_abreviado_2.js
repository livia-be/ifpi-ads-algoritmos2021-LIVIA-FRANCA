//Antonio Carlos Jobim seria referido por Jobim, A. C.:
const prompt = require('prompt-sync')()
function main() {
    let nomeCompleto = prompt('Digite uma nome:'), abrev = ''
    const separado = nomeCompleto.split(' ');
    abrev += separado[separado.length - 1]
    abrev += ','
    let separado2 = ''
    for (let i = 0; i < separado.length - 1; i++) {
        separado2 += separado[i] + ','
    }

    let iniciais = ' '
    iniciais += separado2[0] + '.'
    for (i = 0; i < separado2.length; i++) {
        if (separado2[i] == ',' && i != separado2.length - 1) {
            iniciais += separado2[i + 1] + '.'
        }
    }
    abrev += iniciais
    console.log(abrev)
}
main()