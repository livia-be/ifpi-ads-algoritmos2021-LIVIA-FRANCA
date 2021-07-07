const prompt = require('prompt-sync')()
function main() {
    let str = prompt('Frase:')
    let str2 = ''

    for (let i = str.length - 1; i >= 0; i--) { //inverter
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            str2 += str[i]
        } else if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U' || str[i] == ' ') {
            str2 += str[i]
        } else {
            str2 += '#'
        }
    }
    console.log(str2)
}
main()