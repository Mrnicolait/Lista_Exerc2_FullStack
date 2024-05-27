/* 2 - Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */


const prompt = require('prompt-sync')();

function calcularMulta(velocidade) {
    const limiteVelocidade = 80;
    const valorPorKm = 5;
    
    if (velocidade > limiteVelocidade) {
        let excesso = velocidade - limiteVelocidade;
        let multa = excesso * valorPorKm;
        return multa;
    } else {
        return 0;
    }
}

let velocidade = parseInt(prompt("Por favor, insira a velocidade do carro em Km/h: "));
let multa = calcularMulta(velocidade);

if (multa > 0) {
    console.log("Você foi multado! O valor da multa é R$ " + multa.toFixed(2));
} else {
    console.log("A velocidade está dentro do limite permitido.");
}

