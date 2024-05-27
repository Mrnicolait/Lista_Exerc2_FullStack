/* 23 - Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

// Função para criar e imprimir a matriz identidade
function matrizIdentidade() {
    const tamanho = 7; // Tamanho da matriz identidade
    const matriz = [];

    // Preencher a matriz com zeros inicialmente
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = 0;
        }
    }

    // Preencher a diagonal principal com 1
    for (let i = 0; i < tamanho; i++) {
        matriz[i][i] = 1;
    }

    // Imprimir a matriz identidade
    console.log("Matriz Identidade:");
    for (let i = 0; i < tamanho; i++) {
        let linha = "";
        for (let j = 0; j < tamanho; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

// Chamada da função para criar e imprimir a matriz identidade
matrizIdentidade();