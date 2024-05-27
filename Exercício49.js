/* 49 - Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

function agruparTransacoesPorCategoria(transacoes) {
    let resultado = {};

    transacoes.forEach(transacao => {
        let categoria = transacao.categoria;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += transacao.valor;
    });

    return resultado;
}

let transacoes = [
    { id: 1, valor: 100, data: '2024-01-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-01-02', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-01-03', categoria: 'Alimentação' },
    { id: 4, valor: 150, data: '2024-01-04', categoria: 'Lazer' },
    { id: 5, valor: 70, data: '2024-01-05', categoria: 'Transporte' },
    { id: 6, valor: 120, data: '2024-01-06', categoria: 'Lazer' }
];

let transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);

console.log("Transações agrupadas por categoria:", transacoesAgrupadas);


