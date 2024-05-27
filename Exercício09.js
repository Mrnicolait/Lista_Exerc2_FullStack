/* 9 - Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();

function calcularTotalSalarioPorSexo() {
    let totalSalarioHomens = 0;
    let totalSalarioMulheres = 0;
    let continuar;

    do {
        let salario = parseFloat(prompt("Digite o salário do funcionário: "));
        let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

        if (sexo === 'M') {
            totalSalarioHomens += salario;
        } else if (sexo === 'F') {
            totalSalarioMulheres += salario;
        } else {
            console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
        }

        continuar = prompt("Deseja continuar? (S para sim, qualquer tecla para não): ").toUpperCase() === 'S';
    } while (continuar);

    console.log("Total de salário pago aos homens: R$ " + totalSalarioHomens.toFixed(2));
    console.log("Total de salário pago às mulheres: R$ " + totalSalarioMulheres.toFixed(2));
}

calcularTotalSalarioPorSexo();