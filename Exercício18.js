/* 18 - Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

const prompt = require("prompt-sync")();

let registro = {
    nome: "",
    cargo: "",
    salario: 0
};

function lerRegistro() {
    console.log("Por favor, digite os dados do funcionário:");

    registro.nome = prompt("Nome: ");
    registro.cargo = prompt("Cargo: ");
    registro.salario = parseFloat(prompt("Salário: "));

    console.log("Registro preenchido com sucesso!");
}

function formatarSalario(salario) {
    return "R$ " + salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function exibirRegistro() {
    console.log("Conteúdo do registro:");
    console.log("Nome: " + registro.nome);
    console.log("Cargo: " + registro.cargo);
    console.log("Salário: " + formatarSalario(registro.salario));
}

function main() {
    lerRegistro();
    console.log(); 
    exibirRegistro();
}

main();
