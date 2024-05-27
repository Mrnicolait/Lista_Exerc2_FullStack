/* 22 - A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

const prompt = require("prompt-sync")();

function calcularEstatisticas() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let salarioAte350 = 0;
    let totalPessoas = 0;

    while (true) {
        const salario = parseFloat(prompt("Informe o salário (R$): "));
        if (salario === 0) {
            break; // Sai do loop se o usuário digitar 0 como salário
        }

        const numFilhos = parseInt(prompt("Informe o número de filhos: "));
        
        totalSalario += salario;
        totalFilhos += numFilhos;
        totalPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salarioAte350++;
        }
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

    return {
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualSalarioAte350
    };
}

const estatisticas = calcularEstatisticas();

console.log("Média de salário da população: R$", estatisticas.mediaSalario.toFixed(2));
console.log("Média do número de filhos: ", estatisticas.mediaFilhos.toFixed(2));
console.log("Maior salário: R$", estatisticas.maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: ", estatisticas.percentualSalarioAte350.toFixed(2), "%");
