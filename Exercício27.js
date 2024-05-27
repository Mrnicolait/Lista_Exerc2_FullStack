/* 27 - Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/


function matrizM() {
    const matriz = [];

    for (let i = 0; i < 6; i++) {
        matriz[i] = [];
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10); // Números aleatórios entre 0 e 9
        }
    }

    return matriz;
}

function multiplicarMatrizPorA(matriz, A) {
    const vetorV = [];

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            vetorV.push(matriz[i][j] * A);
        }
    }

    return vetorV;
}

function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < 6; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function imprimirVetor(vetor) {
    console.log("Vetor V:");
    console.log(vetor.join(", "));
}

const M = matrizM();

const A = 2;

imprimirMatriz(M);

const V = multiplicarMatrizPorA(M, A);

imprimirVetor(V);
