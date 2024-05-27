/* 21 - Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

const prompt = require("prompt-sync")();

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo === 'M' || sexo === 'm') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'F' || sexo === 'f') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        console.log("Sexo inválido. Por favor, informe 'M' para masculino ou 'F' para feminino.");
        return null;
    }
    return pesoIdeal;
}

const altura = parseFloat(prompt("Informe a altura em metros: "));
const sexo = prompt("Informe o sexo (M/F): ");

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
    console.log("O peso ideal é:", pesoIdeal.toFixed(2), "kg");
}
