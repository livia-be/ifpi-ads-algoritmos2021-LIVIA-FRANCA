const prompt = require('prompt-sync')()
function main(){

    const a = Number(prompt('Número a: '))
    
    let fator = a/2

    while(!(fator < 1 )){
        fator = fator/2
    }
    
    console.log('fatoração por 2:',fator)

    


}
main()