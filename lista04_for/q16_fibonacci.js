const prompt = require('prompt-sync')()

function main() {
    const num = Number(prompt('Numero limite:'))
    let proxNum, n1 = 0, n2 = 1

    for (let i = 1; i <= num; i++) {
        console.log(n1);
        proxNum = n1 + n2;
        n1 = n2;
        n2 = proxNum;
    }
}
main()