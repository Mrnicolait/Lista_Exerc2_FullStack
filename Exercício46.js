/* 46 - Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

function totalVendasPorVendedor(vendas) {
    let totalPorVendedor = {};
  
    vendas.forEach(venda => {
        if (totalPorVendedor[venda.vendedor]) {
            totalPorVendedor[venda.vendedor] += venda.valor;
        } else {
            totalPorVendedor[venda.vendedor] = venda.valor;
        }
    });
    return totalPorVendedor;
}

let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Pedro", valor: 300 },
    { vendedor: "Maria", valor: 50 }
];

let totalPorVendedor = totalVendasPorVendedor(vendas);

console.log("Total de vendas por vendedor:", totalPorVendedor);
