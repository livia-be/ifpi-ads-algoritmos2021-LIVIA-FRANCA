/*Leia N, calcule e escreva o valor de S.
S =  */
const prompt = require('prompt-sync')()

function main() {
    let s, num = 1
    lim = 99

    console.log('S = 1/1 + 3/2 + 5/3 ... até 99/50 ')

    for (i = 1; i <= lim; i++) {
        s = num / i
        num += 2
        
        if (s == 99 / 50) {
            break
        }
    }
    console.log('S = ', s)
}
main()