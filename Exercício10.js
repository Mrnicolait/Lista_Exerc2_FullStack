/* 10 - Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();

function numeros() {
    let soma = 0;
    let menorValor = Infinity;
    let quantidadeValores = 0;
    let quantidadeValoresPares = 0;
    let continuar;

    do {
        let numero = parseFloat(prompt("Digite um número: "));
        soma += numero;
        quantidadeValores++;

        if (numero < menorValor) {
            menorValor = numero;
        }

        if (numero % 2 === 0) {
            quantidadeValoresPares++;
        }

        continuar = prompt("Deseja continuar? (S para sim, qualquer tecla para não): ").toUpperCase() === 'S';
    } while (continuar);

    let media = soma / quantidadeValores;

    console.log("a) O somatório entre todos os valores é: " + soma);
    console.log("b) O menor valor digitado é: " + menorValor);
    console.log("c) A média entre todos os valores é: " + media.toFixed(2));
    console.log("d) Quantidade de valores pares: " + quantidadeValoresPares);
}

numeros();