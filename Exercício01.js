/* 1 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt = require("prompt-sync")();

function tempoVida(cigarrosPorDia, anosFumando) {
    
    let totalCigarros = cigarrosPorDia * 365 * anosFumando;

    let minutosPerdidos = totalCigarros * 10;

    let diasPerdidos = minutosPerdidos / (24 * 60);

    return diasPerdidos;
}

let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let anosFumando = parseInt(prompt("Há quantos anos você fuma? "));

let diasPerdidos = tempoVida(cigarrosPorDia, anosFumando);

console.log("Você perdeu aproximadamente " + diasPerdidos.toFixed(2) + " dias de vida devido ao hábito de fumar.");
