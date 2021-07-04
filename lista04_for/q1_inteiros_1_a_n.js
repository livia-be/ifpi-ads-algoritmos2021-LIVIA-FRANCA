//Leia N e escreva todos os números inteiros de 1 a N.
const prompt = require('prompt-sync')()

function main() {


    const n = Number(prompt('insira um valor para n: '))
    console.log('números inteiros de 1 a',n)
    for(let i = 1 ; i <= n ; i++ ){
    
    console.log(i)}

}
main()