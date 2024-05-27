/* 12 - Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

const prompt = require("prompt-sync")();

function calcularFibonacci(n) {
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

function main() {
    let n = 10; 

    let fibonacci = calcularFibonacci(n);
    
    console.log("Os 10 primeiros elementos da sequência de Fibonacci são: " + fibonacci.join(', '));
}

main();
