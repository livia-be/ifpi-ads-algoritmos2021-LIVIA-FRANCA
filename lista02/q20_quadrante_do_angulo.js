const prompt = require("prompt-sync")();

function main() {
    const ang = Number(prompt('angulo: '))

    if (ang > 0 & ang <= 90) {
        console.log('quadrante 1')
    }
    else if (ang > 90 & ang <= 180) {
        console.log('quadrante 2')
    }
    else if (ang > 180 & ang <= 270) {
        console.log('quadrante 3')
    }
    else if (ang > 270 & ang <= 360) {
        console.log('quadrante 4')
    }
}

main()