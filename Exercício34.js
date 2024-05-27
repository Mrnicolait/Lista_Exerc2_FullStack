/* 34 - Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

const prompt = require('prompt-sync')();

function gerarMatrizAleatoria() {
    const matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = (Math.random() * 20 - 10).toFixed(2);
        }
    }
    return matriz;
}

function multiplicarLinhasPorDiagonal(matriz) {
    for (let i = 0; i < 50; i++) {
        const diagonalPrincipal = parseFloat(matriz[i][i]);
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = (parseFloat(matriz[i][j]) * diagonalPrincipal).toFixed(2);
        }
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function main() {
    const matriz = gerarMatrizAleatoria();
    
    console.log("Matriz original:");
    imprimirMatriz(matriz);
    
    multiplicarLinhasPorDiagonal(matriz);
    
    console.log("Matriz após as multiplicações:");
    imprimirMatriz(matriz);
}

main();
