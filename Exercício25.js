/* 25 - Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */


function criarMatriz() {
    const linhas = 15;
    const colunas = 20;
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.random() * 20; 
        }
    }

    return matriz;
}

function calcularSomaColunas(matriz) {
    const somaColunas = [];

    for (let j = 0; j < matriz[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            soma += matriz[i][j];
        }
        somaColunas.push(soma);
    }

    return somaColunas;
}

function imprimirSomaColunas(somaColunas) {
    for (let j = 0; j < somaColunas.length; j++) {
        console.log("Soma da coluna", j + 1 + ":", somaColunas[j].toFixed(2));
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].map(num => num.toFixed(2)).join("\t"));
    }
}

const matriz = criarMatriz();

console.log("Matriz:");
imprimirMatriz(matriz);

const somaColunas = calcularSomaColunas(matriz);

console.log("\nSoma de cada coluna:");
imprimirSomaColunas(somaColunas);
