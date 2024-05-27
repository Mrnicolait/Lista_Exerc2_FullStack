/* 37 - Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/

const prompt = require('prompt-sync')();

function gerarRespostaAleatoria() {
    const opcoes = ['V', 'F'];
    const indice = Math.floor(Math.random() * opcoes.length);
    return opcoes[indice];
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function main() {
    const gabarito = []; 
    const numAlunos = 50; 
    const numQuestoes = 20; 

    console.log("Gabarito:");
    for (let i = 0; i < numQuestoes; i++) {
        gabarito.push(gerarRespostaAleatoria());
    }
    console.log(gabarito);

        for (let aluno = 1; aluno <= numAlunos; aluno++) {
        const respostasAluno = [];
        console.log(`Aluno ${aluno}:`);
        
        for (let i = 0; i < numQuestoes; i++) {
            respostasAluno.push(gerarRespostaAleatoria());
        }

        const numAcertos = contarAcertos(gabarito, respostasAluno);

        console.log(`Número de acertos do aluno ${aluno}: ${numAcertos}`);
        if (numAcertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

main();
