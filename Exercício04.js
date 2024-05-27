/* 4 - Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

const prompt = require('prompt-sync')();

function triangulo(lado1, lado2, lado3) {
    return (
        lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2
    );
}

function lado() {
    let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado: "));
    let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado: "));
    let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado: "));
    
    if (triangulo(lado1, lado2, lado3)) {
        console.log("É possível formar um triângulo.");
    } else {
        console.log("Não é possível formar um triângulo.");
    }
}

lado();