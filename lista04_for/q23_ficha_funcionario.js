/* Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
 */
const prompt = require('prompt-sync')()

function main() {
    let cod, numH, numD, salario, salarioLIQ, INSS, IR
    numFuncionario = Number(prompt('Quantos funcionarios serão?:'))
    for (i = 0; i < numFuncionario; i++) {
        cod = Number(prompt('Num do funcionario:'))
        numH = Number(prompt('Num de horas trabalhadas:'))
        numD = Number(prompt('Num de dependentes:'))

        salario = (numH * 12) + (numD * 40)
        INSS = 0.08 * salario
        IR = 0.05 * salario
        salarioLIQ = salario - (INSS + IR)
        console.log('Salario liquido:', salarioLIQ, '\nDesconto INSS:', INSS, '\nDesconto IR:', IR)
    }
}
main()