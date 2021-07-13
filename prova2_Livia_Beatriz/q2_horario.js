const prompt = require('prompt-sync')()
function main() {
    let horario = prompt('insira um horário hh:mm:ss: ')

    let hora = '', minuto = '', segundos = ''
    hora += horario[0] + horario[1] + ' hora(s)'
    minuto += horario[3] + horario[4] + ' minuto(s)'
    segundos += horario[6] + horario[7] + ' segundo(s)'

 console.log(hora,minuto, 'e' ,segundos)
}
main()