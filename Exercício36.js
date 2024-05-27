/* 36 - Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/

const prompt = require('prompt-sync')();

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (respostas.includes(gabarito[i])) {
            acertos++;
        }
    }
    return acertos;
}
function preencherCartela() {
    const cartela = [];
    while (cartela.length < 13) {
        const numero = Math.floor(Math.random() * 20) + 1;
        if (!cartela.includes(numero)) {
            cartela.push(numero);
        }
    }
    return cartela;
}

function main() {
    const gabarito = preencherCartela(); 
    const numApostadores = 100; 
    const minAcertosParaGanhar = 13; 

    for (let apostador = 1; apostador <= numApostadores; apostador++) {
        const cartelaApostador = preencherCartela(); 

        const numAcertos = contarAcertos(gabarito, cartelaApostador);

        console.log(`Cartela do apostador ${apostador}:`, cartelaApostador);
        console.log(`Número de acertos do apostador ${apostador}: ${numAcertos}`);
        if (numAcertos >= minAcertosParaGanhar) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
        console.log("-----------------------------------");
    }
}

// Chamada da função principal
main();
