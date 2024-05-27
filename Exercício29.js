/* 29 - 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

function criarMatriz() {
    const matriz = [];

    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); 
        }
    }

    return matriz;
}

function somaLinha4(matriz) {
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[3][j]; 
    }
    return soma;
}

function somaColuna2(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][1]; 
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][i]; 
    }
    return soma;
}

function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz) {
    console.log("Matriz:");
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join("\t"));
    }
}

const M = criarMatriz();

const somaLinha4Result = somaLinha4(M);
const somaColuna2Result = somaColuna2(M);
const somaDiagonalPrincipalResult = somaDiagonalPrincipal(M);
const somaTotalResult = somaTotal(M);

imprimirMatriz(M);
console.log("Soma da linha 4:", somaLinha4Result);
console.log("Soma da coluna 2:", somaColuna2Result);
console.log("Soma da diagonal principal:", somaDiagonalPrincipalResult);
console.log("Soma total dos elementos da matriz:", somaTotalResult);
