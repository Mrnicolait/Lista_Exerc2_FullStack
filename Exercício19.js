/* 19 - Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/


const prompt = require("prompt-sync")();

function validarHorario(horario) {
   
    let regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(horario);
}

function main() {
    let horarios = [];

    for (let i = 0; i < 5; i++) {
        let horario;
        do {
            horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
            if (!validarHorario(horario)) {
                console.log("Formato inválido! O formato correto é HH:MM:SS.");
            }
        } while (!validarHorario(horario));

        horarios.push(horario);
    }

    console.log("\nHorários válidos no formato HH.MM.SS:");
    for (let horario of horarios) {
        let [hh, mm, ss] = horario.split(":");
        console.log(`${hh}.${mm}.${ss}`);
    }
}

main();
