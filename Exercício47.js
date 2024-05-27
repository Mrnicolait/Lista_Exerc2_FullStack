/* 47 - Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/


function transformarObjeto(objeto, funcao) {
    let novoObjeto = {};
    for (let chave in objeto) {
        novoObjeto[chave] = funcao(objeto[chave]);
    }
    return novoObjeto;
}

function dobrarValor(valor) {
    return valor * 2; 
}

let objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
};

let novoObjeto = transformarObjeto(objetoEntrada, dobrarValor);

console.log("Novo objeto:", novoObjeto);
