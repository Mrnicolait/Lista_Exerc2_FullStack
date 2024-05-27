/* 39 - Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/

const prompt = require('prompt-sync')();

function preencherAleatoriamente(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * 201) - 100; 
    }
}

function compactarVetor(vetor) {
    const vetorCompactado = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0) {
            vetorCompactado.push(vetor[i]);
        }
    }
    return vetorCompactado;
}

function main() {
    const vetorA = new Array(100);
 
    preencherAleatoriamente(vetorA);

    const vetorB = compactarVetor(vetorA);

    console.log("Vetor B (compactado):", vetorB);
}

main();
