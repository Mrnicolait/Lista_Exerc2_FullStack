/* 35 - Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/

const prompt = require('prompt-sync')();

function imprimirEVaziar(vetor, tipo) {
    console.log(`Vetor de ${tipo}:`, vetor);
    vetor.length = 0;
}

function main() {
    const vetorPar = [];
    const vetorImpar = [];
    const tamanhoMaximo = 5;

    for (let i = 0; i < 30; i++) {
        const valor = parseInt(prompt(`Digite o ${i + 1}º valor: `));

        if (valor % 2 === 0) {
            vetorPar.push(valor);
            if (vetorPar.length === tamanhoMaximo) {
                imprimirEVaziar(vetorPar, 'pares');
            }
        } else {
            vetorImpar.push(valor);
            if (vetorImpar.length === tamanhoMaximo) {
                imprimirEVaziar(vetorImpar, 'ímpares');
            }
        }
    }

    if (vetorPar.length > 0) {
        imprimirEVaziar(vetorPar, 'pares');
    }
    if (vetorImpar.length > 0) {
        imprimirEVaziar(vetorImpar, 'ímpares');
    }
}

main();
