/* 45 - Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

function contarFrequenciaStrings(array) {
    let objetoFrequencia = {};
    array.forEach(string => {
        if (objetoFrequencia[string]) {
            objetoFrequencia[string]++;
        } else {
            objetoFrequencia[string] = 1;
        }
    });
    return objetoFrequencia;
}

let arrayStrings = ["a", "b", "c", "a", "b", "a", "c", "d"];

let objetoFrequencia = contarFrequenciaStrings(arrayStrings);

console.log("Frequência de strings:", objetoFrequencia);
