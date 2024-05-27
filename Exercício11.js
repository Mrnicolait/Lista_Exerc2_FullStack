/* 11 - Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require("prompt-sync")();

function calcularPA(primeiroTermo, razao, n) {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = primeiroTermo + i * razao;
        termos.push(termo);
        soma += termo;
    }

    return { termos, soma };
}

function main() {
    let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
    let razao = parseFloat(prompt("Digite a razão da PA: "));

    let resultado = calcularPA(primeiroTermo, razao, 10);
    
    console.log("Os 10 primeiros elementos da PA são: " + resultado.termos.join(', '));
    console.log("A soma dos 10 primeiros elementos da PA é: " + resultado.soma);
}

main();
