/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.*/

const prompt = require('prompt-sync')()

function main() {

    let salario, numFilhos, mediaSalario, mediaFilhos, percentual,
        numHabitantes, somaSalario = 0, somaFilhos = 0, salariosMenMil = 0

    numHabitantes = Number(prompt('Informe o número  de habitantes: '))

    for (i = 0; i < numHabitantes; i++) {
        salario = Number(prompt('informe o seu salário: '))
        numFilhos = Number(prompt('informe quantos filhos você tem: '))

        if (salario <= 1000) {
            salariosMenMil += salario
        }
        somaSalario += salario
        somaFilhos += numFilhos
       
    }
    mediaSalario = somaSalario / numHabitantes

    mediaFilhos = somaFilhos / numHabitantes
    percentual = 

    console.log('media dos salarios: ', mediaSalario, '\n', 'media dos filhos', mediaFilhos, 'percentual:',percentual)
}
main()