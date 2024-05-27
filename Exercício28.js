/* 28 - Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function criarMatriz() {
    const matriz = [];

    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); // Números aleatórios entre 0 e 99
        }
    }

    return matriz;
}

function somaAcimaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somaAbaixoDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz) {
    console.log("Matriz:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

const matriz = criarMatriz();

imprimirMatriz(matriz);

const somaAcimaDiagonal = somaAcimaDiagonalPrincipal(matriz);
console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);

const somaAbaixoDiagonal = somaAbaixoDiagonalPrincipal(matriz);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);
