const prompt = require('prompt-sync')()
function main() {
    let str = prompt('Frase: ')
    let str2 = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            str2 += str[i]
        } else {
            str2 += '\n' // \n é quebra de linha
        }
    }
    console.log(str2)
}
main()