/* 7 - Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require("prompt-sync")();

function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
    let precoPorDia, precoPorKm, precoTotal;

    if (tipoCarro.toLowerCase() === 'popular') {
        precoPorDia = 90;
        if (kmPercorridos <= 100) {
            precoPorKm = 0.20;
        } else {
            precoPorKm = 0.10;
        }
    } else if (tipoCarro.toLowerCase() === 'luxo') {
        precoPorDia = 150;
        if (kmPercorridos <= 200) {
            precoPorKm = 0.30;
        } else {
            precoPorKm = 0.25;
        }
    } else {
        console.log("Tipo de carro inválido. Por favor, escolha entre 'popular' ou 'luxo'.");
        return;
    }

    precoTotal = (precoPorDia * diasAluguel) + (precoPorKm * kmPercorridos);
    return precoTotal;
}

function main() {
    let tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo): ");
    let diasAluguel = parseInt(prompt("Quantos dias de aluguel: "));
    let kmPercorridos = parseFloat(prompt("Quantos Km foram percorridos: "));

    let precoTotal = calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos);

    if (precoTotal !== undefined) {
        console.log("O preço total a ser pago é: R$ " + precoTotal.toFixed(2));
    }
}

main();