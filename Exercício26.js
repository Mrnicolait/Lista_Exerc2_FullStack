/* 26 - Dadas duas matrizes numéricas A[1..3,1..3] e B[1..3,1..3], calcular a matriz produto
P[1..3,1..3]. */


function criarMatriz() {
    const matriz = [];

   
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    return matriz;
}

function calcularProdutoMatrizes(A, B) {
        const P = [];
        for (let i = 0; i < 3; i++) {
        P[i] = [];
        for (let j = 0; j < 3; j++) {
            P[i][j] = 0;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join("\t"));
    }
}

const A = criarMatriz();
const B = criarMatriz();

console.log("Matriz A:");
imprimirMatriz(A);
console.log("Matriz B:");
imprimirMatriz(B);

const P = calcularProdutoMatrizes(A, B);

console.log("Matriz Produto P:");
imprimirMatriz(P);
