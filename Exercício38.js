/* 38 - Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */


const prompt = require('prompt-sync')();

function calcularSoma(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

function calcularProduto(vetor) {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i];
    }
    return produto;
}

function calcularMedia(vetor) {
    const soma = calcularSoma(vetor);
    return soma / vetor.length;
}

function ordenarVetor(vetor) {
    return vetor.sort((a, b) => a - b);
}

function main() {
    const vetor = [];
   
    console.log("Digite os elementos do vetor:");
    for (let i = 0; i < 6; i++) {
        vetor.push(parseFloat(prompt(`Elemento ${i + 1}: `)));
    }

    const operacao = parseInt(prompt("Escolha uma operação (1 - Soma, 2 - Produto, 3 - Média, 4 - Ordenar, 5 - Mostrar vetor): "));

    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", calcularSoma(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", calcularProduto(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", calcularMedia(vetor));
            break;
        case 4:
            console.log("Vetor ordenado:", ordenarVetor(vetor));
            break;
        case 5:
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Operação inválida.");
    }
}

main();
