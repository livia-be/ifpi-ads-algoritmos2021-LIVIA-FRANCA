const prompt = require("prompt-sync")();

function main() {
    var a = Number(prompt('a: '))
    var b = Number(prompt('b: ')) 
    var c = Number(prompt('c: ')) 

    if(a==0){
console.log('número invalido. O valor de a precisa ser diferente de 0.')
    }

else {
    var delta = Math.pow(b, 2) - (4*a*c)

    var raiz = Math.sqrt(delta) 
    var x1 = ((-b)+raiz)/(2*a)
    var x2 = ((-b)-raiz)/(2*a)

    console.log('raiz x1= ',x1 , '\n' ,'raiz x2= ',x2)
}

}
main()