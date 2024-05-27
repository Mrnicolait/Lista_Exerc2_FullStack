/* 31 - Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

function criarMatriz() {
    const matriz = [];
    for (let i = 0; i < 30; i++) {
        matriz[i] = [];
        for (let j = 0; j < 30; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10); 
        }
    }
    return matriz;
}

function contarValoresEConstruirX(matriz, A) {
    const X = [];
    let contadorA = 0;
    for (let i = 0; i < 30; i++) {
        X[i] = [];
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === A) {
                contadorA++;
            } else {
                X[i].push(matriz[i][j]);
            }
        }
    }
    return { contadorA, X };
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

const V = criarMatriz();

const A = 5;

const { contadorA, X } = contarValoresEConstruirX(V, A);

console.log(`Número de valores iguais a ${A} na matriz V:`, contadorA);
console.log("Matriz X contendo elementos diferentes de", A + ":");
imprimirMatriz(X);
