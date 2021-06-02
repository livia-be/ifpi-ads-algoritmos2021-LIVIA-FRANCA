const prompt = require("prompt-sync")();

function main() {
    const senha = prompt('digite a senha: ')

    if (senha == '1234') {
        console.log('acesso liberado')
    }
    else {
        console.log('acesso bloqueado')
    }
}
main()