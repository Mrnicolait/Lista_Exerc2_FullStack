/* 40 - Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

const prompt = require('prompt-sync')();

function gerarAposta() {
    const aposta = [];
    while (aposta.length < 5) {
        const numero = Math.floor(Math.random() * 10) + 1;
        if (!aposta.includes(numero)) {
            aposta.push(numero);
        }
    }
    return aposta;
}

function gerarSorteio() {
    const sorteio = [];
    while (sorteio.length < 5) {
        const numero = Math.floor(Math.random() * 10) + 1;
        if (!sorteio.includes(numero)) {
            sorteio.push(numero);
        }
    }
    return sorteio;
}

function vetorContemElementos(vetor, elementos) {
    for (let i = 0; i < elementos.length; i++) {
        if (!vetor.includes(elementos[i])) {
            return false;
        }
    }
    return true;
}

function main() {
    const resultadoOficial = gerarSorteio();
    console.log("Números sorteados:", resultadoOficial);

    let ganhadorEncontrado = false;
    for (let i = 0; i < 50; i++) {
        const aposta = gerarAposta();
        console.log(`Aposta ${i + 1}:`, aposta);
        if (vetorContemElementos(aposta, resultadoOficial)) {
            console.log("Ganhador!");
            ganhadorEncontrado = true;
            break;
        }
    }

    if (!ganhadorEncontrado) {
        console.log("Nenhum ganhador encontrado.");
    }
}

main();
