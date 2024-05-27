/* 42 - Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

let dados = {
    nome: "Marcelo",
    idade: 42,
    lista1: [1, 2, 3],
    lista2: ["gremio", "churrasco", "filme"],
    lista3: [true, false],
    endereco: {
        rua: "Rua Amapá",
        cidade: "Cachoeirinha",
        estado: "RS"
    }
};

function filtrarArrays(objeto) {
    let novoObjeto = {};
    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave];
        }
    }
    return novoObjeto;
}

let arrays = filtrarArrays(dados);

console.log("Propriedades que são arrays:", arrays);
