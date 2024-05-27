/* 30 - Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */


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

function calcularSomaLinhas(matriz) {
    const SL = [];
    for (let i = 0; i < 5; i++) {
        let somaLinha = 0;
        for (let j = 0; j < 5; j++) {
            somaLinha += matriz[i][j];
        }
        SL.push(somaLinha);
    }
    return SL;
}

function calcularSomaColunas(matriz) {
    const SC = [];
    for (let j = 0; j < 5; j++) {
        let somaColuna = 0;
        for (let i = 0; i < 5; i++) {
            somaColuna += matriz[i][j];
        }
        SC.push(somaColuna);
    }
    return SC;
}

function imprimirMatriz(matriz) {
    console.log("Matriz:");
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function imprimirVetor(vetor, nome) {
    console.log(`Vetor ${nome}: [${vetor.join(", ")}]`);
}

const M = criarMatriz();

const SL = calcularSomaLinhas(M);

const SC = calcularSomaColunas(M);

imprimirMatriz(M);
imprimirVetor(SL, "SL");
imprimirVetor(SC, "SC");
