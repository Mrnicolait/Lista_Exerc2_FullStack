/* 24 - Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

// Função para criar e preencher a matriz M com números aleatórios

function criarMatriz() {
    const linhas = 6;
    const colunas = 8;
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 21) - 10; // Números aleatórios entre -10 e 10
        }
    }

    return matriz;
}

function contarNegativos(matriz) {
    const vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let countNegativos = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                countNegativos++;
            }
        }
        vetorC.push(countNegativos);
    }

    return vetorC;
}

function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

function imprimirVetor(vetor) {
    console.log("Vetor C:", vetor.join(" "));
}

const matrizM = criarMatriz();

imprimirMatriz(matrizM);

const vetorC = contarNegativos(matrizM);

imprimirVetor(vetorC);
