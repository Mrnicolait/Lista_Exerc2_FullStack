/* 3 - Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */


const prompt = require('prompt-sync')();

function calcularPrecoPassagem() {
    let distancia = parseFloat(prompt("Por favor, insira a distância que você deseja percorrer em Km: "));
    const precoPorKmCurtaDistancia = 0.50;
    const precoPorKmLongaDistancia = 0.45;
    
    let precoPassagem;
    if (distancia <= 200) {
        precoPassagem = distancia * precoPorKmCurtaDistancia;
    } else {
        precoPassagem = distancia * precoPorKmLongaDistancia;
    }

    console.log("O preço da passagem é R$ " + precoPassagem.toFixed(2));
}

calcularPrecoPassagem();