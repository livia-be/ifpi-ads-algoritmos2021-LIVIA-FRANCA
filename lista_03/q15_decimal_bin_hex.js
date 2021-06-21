const prompt = require('prompt-sync')()
function main() {
    let num = 1
    while (num >= 0 && num <= 255) {
        num = Number(prompt('Numero decimal:'))
        if (num >= 0 && num <= 255) {
            hexString = num.toString(16);
            console.log("Hexadecimal:", hexString)
            console.log("Binario:", dec2bin(num))
        }
    }
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
main()