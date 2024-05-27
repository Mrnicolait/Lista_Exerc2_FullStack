/* 48 - Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

function combinarInventarios(inventarioA, inventarioB) {
    let inventarioCombinado = {};

    function adicionarItens(inventario) {
        for (let item in inventario) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventario[item];
            } else {
                inventarioCombinado[item] = inventario[item];
            }
        }
    }

    adicionarItens(inventarioA);
    adicionarItens(inventarioB);

    return inventarioCombinado;
}

let inventarioLojaA = {
    "Brahma": 15,
    "Skol": 10,
    "Heineken": 5
};

let inventarioLojaB = {
    "Skol": 20,
    "Corona": 7,
    "Heineken": 8
};

let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("Inventário combinado:", inventarioCombinado);
