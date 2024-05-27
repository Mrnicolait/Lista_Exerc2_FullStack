/* 33 - Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.*/

function gerarMatrizAleatoria() {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) - 10 ;
        }
    }
    return matriz;
}

function mediaDiagonalSecundaria(matriz) {
    const soma = matriz[0][2] + matriz[1][1] + matriz[2][0];
    return soma / 3;
}

function multiplicarDiagonalPrincipal(matriz, media) {
    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= media;
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
    
    const media = mediaDiagonalSecundaria(matriz);
    multiplicarDiagonalPrincipal(matriz, media);
    
    console.log("Matriz após multiplicação:");
    imprimirMatriz(matriz);
}

main();
