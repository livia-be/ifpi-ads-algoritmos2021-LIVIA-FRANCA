const prompt = require('prompt-sync')()
function main() {

    let x = Number(prompt('Número X= '))
    let n = Number(prompt('Número N= '))

    while (n >= 2) {
    
       x = (x / n)
       n--
       console.log(x.toFixed(2))  
    }
}
main()