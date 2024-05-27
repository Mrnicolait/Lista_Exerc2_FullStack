/* 13 - Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. */


function preencherFibonacci(n) {
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

function main() {
    let n = 15; 

    let fibonacci = preencherFibonacci(n);
    
    console.log("Os 15 primeiros elementos da sequência de Fibonacci são: " + fibonacci.join(', '));
}

main();
