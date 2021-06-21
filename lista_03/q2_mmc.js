const prompt = require('prompt-sync')()
function main(){

    const a = Number(prompt('Número a: '))
    const b = Number(prompt('Número b: '))

    let fator = 1

    while(!(fator % a == 0 && fator % b == 0)){
        fator++
    }
    
    console.log('MMC de',a,'e',b,':',fator)

    


}
main()