/* 44 - Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

function contarPropriedadesString(objeto) {
    let contador = 0;
    for (let chave in objeto) {
        if (typeof objeto[chave] === "string") {
            contador++;
        }
    }
    return contador;
}

let exemploObjeto = {
    nome: "Marcelo",
    idade: 42,
    email: "mrnicolait@gmail.com",
    endereco: "Rua Amapá"
};

let numeroPropriedadesString = contarPropriedadesString(exemploObjeto);

console.log("Número de propriedades do tipo string:", numeroPropriedadesString);
