const prompt = require("prompt-sync")();
function main() {
    const diaNasc = Number(prompt('dia de nascimento: '))
    const mesNasc = Number(prompt('mes de nascimento: ')) * 30
    const anoNasc = Number(prompt('ano de nascimento: ')) * 360

    const diaAt = Number(prompt('dia atual: '))
    const mesAt = Number(prompt('mes atual: ')) * 30
    const anoAt = Number(prompt('ano atual: ')) * 360

    if (anoAt > anoNasc) {
        const diasTotaisNasc = diaNasc + mesNasc + anoNasc

        var diasTotaisAt = diaAt + mesAt + anoAt

        const diasTotais = diasTotaisAt - diasTotaisNasc

        const ano = diasTotais / 360

        console.log('idade: ', ano, 'anos')
    }
    else {
        console.log('Datas invalidas')
    }
}
main()


