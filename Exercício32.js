/* 32 - Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

function criarMatriz() {
    const matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 13; j++) {
            matriz[i][j] = Math.floor(Math.random() * 199) - 99;
        }
    }
    return matriz;
}

function encontrarMaiorElementoModuloLinha(linha) {
    let maiorElementoModulo = Math.abs(linha[0]);
    for (let i = 1; i < linha.length; i++) {
        const elementoModulo = Math.abs(linha[i]);
        if (elementoModulo > maiorElementoModulo) {
            maiorElementoModulo = elementoModulo;
        }
    }
    return maiorElementoModulo;
}

function dividirPorMaiorElementoModuloLinha(linha, maiorElementoModulo) {
    const linhaModificada = [];
    for (let i = 0; i < linha.length; i++) {
        linhaModificada[i] = linha[i] / maiorElementoModulo;
    }
    return linhaModificada;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

const M = criarMatriz();

console.log("Matriz M original:");
imprimirMatriz(M);

const MModificada = [];
for (let i = 0; i < 12; i++) {
    const maiorElementoModulo = encontrarMaiorElementoModuloLinha(M[i]);
    MModificada[i] = dividirPorMaiorElementoModuloLinha(M[i], maiorElementoModulo);
}

console.log("Matriz M modificada:");
imprimirMatriz(MModificada);
