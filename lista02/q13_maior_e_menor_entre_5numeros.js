const prompt = require("prompt-sync")();
function main() {
    const num1 = Number(prompt('numero 1: '))
    const num2 = Number(prompt('numero 2: '))
    const num3 = Number(prompt('numero 3: '))
    const num4 = Number(prompt('numero 4: '))
    const num5 = Number(prompt('numero 5: '))

    let maior,menor
    

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        maior = num1
    }  if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
        menor = num1
    }
   
    if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        maior = num2
    }  if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        menor = num2
    }

    if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        maior = num3
    }  if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
        menor = num3
    }

    if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        maior = num4
    }  if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
        menor = num4
    }

    if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
        maior = num5
    }  if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
        menor = num5
    }
    
    console.log('maior: ', maior)
    console.log('menor: ', menor)
}
main()