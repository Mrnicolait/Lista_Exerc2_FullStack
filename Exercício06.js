/* 6 - Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")()
const numeroCorreto = Math.floor((Math.random() *5) + 1);

let tentativa

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5: "))
    if (isNaN(tentativa) || tentativa < 1 || tentativa > 5) {
        console.log("Entrada inválida. Por favor, insira um número entre 1 e 5.");
    } else if (tentativa !== numeroCorreto){
        console.log("Errou, tente novamente!!!")
    } 
} while (tentativa != numeroCorreto)

console.log("Parabéns!!! Você acertou")