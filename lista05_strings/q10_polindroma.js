/**Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma. */
const prompt = require('prompt-sync')()
function main() {
    let palavra = prompt('insira uma palavra:')
    let polin = ''

    for (let i = palavra.length - 1; i >= 0; i--){
      polin+= palavra[i]
      
    }
    console.log('o inverso de',palavra,'é',polin)
    if (polin == palavra){
        console.log(palavra,'é políndroma')
    }else{
        console.log(palavra,'não é políndroma')
    }
    
}
main()