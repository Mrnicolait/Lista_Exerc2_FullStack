/*5 - Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

const prompt = require('prompt-sync')();

function escolhaAleatoriaComputador() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const indice = Math.floor(Math.random() * 3);
    return opcoes[indice];
}


function determinarResultado(jogador, computador) {
    if (jogador == computador) {
        return "Empate!";
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

function jogarJoKenPo() {
    const jogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();
    if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
        console.log("Escolha inválida. Por favor, escolha Pedra, Papel ou Tesoura.");
        return;
    }

    const computador = escolhaAleatoriaComputador();

    console.log("Você escolheu: " + jogador);
    console.log("O computador escolheu: " + computador);

    const resultado = determinarResultado(jogador, computador);
    console.log(resultado);
}

jogarJoKenPo();

