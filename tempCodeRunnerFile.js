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
