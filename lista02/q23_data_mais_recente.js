const prompt = require("prompt-sync")();

function main() {
    var dia1 = Number(prompt('dia 1: '))
    var mes1 = Number(prompt('mes 1: ')) 
    var ano1 = Number(prompt('ano 1: ')) 

    var dia2 = Number(prompt('dia 2: '))
    var mes2 = Number(prompt('mes 2: ')) 
    var ano2 = Number(prompt('ano 2: ')) 

    const data1 = dia1 + mes1 * 30 + ano1 * 360
    const data2 = dia2 + mes2 * 30 + ano2 * 360

    if (data1 > data2){
        console.log('mais atual:', dia1, '/', mes1, '/', ano1)
    }
    else if (data1 < data2){
        console.log('mais atual:', dia2, '/', mes2, '/', ano2)
    }
    else{
        console.log('Datas iguais')
    }
}
main()