//Leia N e escreva todos os números inteiros pares de 1 a N.
const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('insira um valor para n: '))
    console.log('números inteiros pares de 1 a',n)
   
    for(let i = 1 ; i <= n ; i++ ){
        if(i % 2 != 0 ){
            continue
        }
        console.log(i)
    }
    
}
main()

   
    
    
  
