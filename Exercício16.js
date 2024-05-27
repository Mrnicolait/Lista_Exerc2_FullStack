/* 16 - Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preencherVetorAleatorio(tamanho, min, max) {
    let vetor = [];

    for (let i = 0; i < tamanho; i++) {
        vetor.push(gerarNumeroAleatorio(min, max));
    }

    return vetor;
}

function main() {
    let tamanho = 20;
    let min = 0;
    let max = 99;

    let numeros = preencherVetorAleatorio(tamanho, min, max);

        console.log("Números gerados:");
    console.log(numeros.join(', '));

       numeros.sort((a, b) => a - b);

    console.log("Números ordenados:");
    console.log(numeros.join(', '));
}

main();
