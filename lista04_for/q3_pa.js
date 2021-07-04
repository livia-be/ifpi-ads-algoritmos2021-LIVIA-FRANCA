//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
//Aritmética que tem por valor inicial A0 e razão R. (a + (r * cont))
const prompt = require('prompt-sync')()

function main() {

    let r, t, lim, i
    r = Number(prompt('Razão:'))
    t = Number(prompt('Termo:'))
    lim = Number(prompt('limite:'))
    console.log('valores menores que ', lim)

    for (i = 0; i < lim; i++) {  //(comando (1vez, inicio); condição; comando (sempre))
        t = (t + (r * i))
        if (t < lim) {
            console.log(t)
        }
    }
}
main()


//function main(){

  //  let a, r, n, 
    //r = Number(prompt('Razão:'))
   // a = Number(prompt('Termo:'))
   // n = Number(prompt('limite:'))
//console.log('valores menores que ',n)
  //  for (let i = 0; i < n; (a+r*i; i++) {
      //  console.log(i)

  //  } 