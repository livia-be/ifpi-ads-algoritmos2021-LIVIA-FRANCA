const prompt = require('prompt-sync')()
function main() {
    let str = prompt('Frase: ')
    let str2 = ''

    for (let i = 0; i < str.length; i++) {
        
            str2 += str[i] + str[i]
        
    }
    console.log(str2)
}
main()