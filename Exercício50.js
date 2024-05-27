/* 50 - Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.*/

const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel() {
    const nome = prompt('Nome do Hotel: ');
    const cidade = prompt('Cidade do Hotel: ');
    const quartosTotais = parseInt(prompt('Número total de quartos: '));
    const quartosDisponiveis = quartosTotais;

    const hotel = {
        id: proximoIdHotel++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis
    };

    hoteis.push(hotel);
    console.log('Hotel adicionado com sucesso!');
}

function buscarHoteisPorCidade() {
    const cidade = prompt('Digite a cidade para buscar hotéis: ');
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());

    if (hoteisNaCidade.length > 0) {
        console.log('Hotéis disponíveis em ' + cidade + ':');
        hoteisNaCidade.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
        });
    } else {
        console.log('Nenhum hotel encontrado nesta cidade.');
    }
}

function fazerReserva() {
    const idHotel = parseInt(prompt('Digite o ID do hotel para fazer a reserva: '));
    const hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (hotel && hotel.quartosDisponiveis > 0) {
        const nomeCliente = prompt('Nome do Cliente: ');

        const reserva = {
            idReserva: proximoIdReserva++,
            idHotel: idHotel,
            nomeCliente
        };

        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log('Reserva feita com sucesso!');
    } else {
        console.log('Hotel não encontrado ou sem quartos disponíveis.');
    }
}

function cancelarReserva() {
    const idReserva = parseInt(prompt('Digite o ID da reserva a ser cancelada: '));
    const reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);

    if (reservaIndex !== -1) {
        const reserva = reservas[reservaIndex];
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

        reservas.splice(reservaIndex, 1);
        hotel.quartosDisponiveis++;
        console.log('Reserva cancelada com sucesso!');
    } else {
        console.log('Reserva não encontrada.');
    }
}

function listarReservas() {
    if (reservas.length > 0) {
        reservas.forEach(reserva => {
            const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
        });
    } else {
        console.log('Nenhuma reserva encontrada.');
    }
}

function menu() {
    console.log('\nSistema de Reserva de Hotéis');
    console.log('1. Adicionar Hotel');
    console.log('2. Buscar Hotéis por Cidade');
    console.log('3. Fazer Reserva');
    console.log('4. Cancelar Reserva');
    console.log('5. Listar Reservas');
    console.log('6. Sair');
}

while (true) {
    menu();
    const opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            adicionarHotel();
            break;
        case 2:
            buscarHoteisPorCidade();
            break;
        case 3:
            fazerReserva();
            break;
        case 4:
            cancelarReserva();
            break;
        case 5:
            listarReservas();
            break;
        case 6:
            console.log('Saindo...');
            process.exit();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
}
