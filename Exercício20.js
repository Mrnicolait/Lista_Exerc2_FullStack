/* 20 - Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */

const funcionarios = [];

function gerarNome(index) {
    const nomes = [
        "Ana", "João", "Maria", "Pedro", "Carla", "Paulo", "Fernanda", "Rafael", "Juliana", "Diego",
        "Laura", "Luiz", "Amanda", "Lucas", "Camila", "Guilherme", "Isabela", "Gustavo", "Mariana", "Rodrigo",
        "Patrícia", "Felipe", "Gabriela", "Marcelo", "Larissa", "Thiago", "Vanessa", "Matheus", "Caroline", "Ricardo",
        "Daniela", "Bruno", "Débora", "Eduardo", "Fernanda", "Leonardo", "Manuela", "Vitor", "Leticia", "Alexandre",
        "Tatiane", "Anderson", "Jéssica", "Antônio", "Natália", "Vinícius", "Aline", "José", "Débora", "Caio",
        "Helena", "Marcelo", "Isadora", "Sérgio", "Vanessa", "Felipe", "Raquel", "Daniel", "Amanda", "César",
        "Lívia", "Renato", "Bianca", "Diego", "Jéssica", "Marcos", "Larissa", "Maurício", "Fernanda", "Thales",
        "Valentina", "Raphael", "Sabrina", "Alex", "Priscila", "André", "Carolina", "Rogério", "Luana", "Elias"
    ];
    return nomes[index % nomes.length];
}

function criarFuncionario(matricula) {
    const nome = gerarNome(matricula - 1);
    const salarioBruto = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Salário entre 2000 e 5000
    return { matricula, nome, salarioBruto };
}

for (let i = 1; i <= 80; i++) {
    funcionarios.push(criarFuncionario(i));
}

function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto * 0.12;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
}

function imprimirContracheque(funcionario) {
    const deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);

    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto);
    console.log("Dedução INSS:", deducaoINSS);
    console.log("Salário líquido:", salarioLiquido);
    console.log("-------------------------");
}

console.log("Contracheques dos funcionários:");
for (let funcionario of funcionarios) {
    imprimirContracheque(funcionario);
}
