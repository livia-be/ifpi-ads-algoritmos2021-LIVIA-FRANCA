const prompt = require("prompt-sync")();

function main() {
    
    console.log('Sua senha é 1234')
    const senha = prompt('digite a senha: ')

    if (senha == '1234') {
        console.log('acesso liberado')
    }
    else {
        console.log('acesso bloqueado')
    }
}
main()