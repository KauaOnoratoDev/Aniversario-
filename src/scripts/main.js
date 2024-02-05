const dataEvento = new Date("Nov 26, 2024 00:00:00");
const stampDataEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const StampAgora = agora.getTime();
    const distanciaAteEvento = stampDataEvento - StampAgora

    const dias = (1000 * 60 * 60 * 24);
    const horas  = (1000 * 60 * 60);
    const minutos = (1000 * 60);

    const diasAteEvento = Math.floor(distanciaAteEvento / dias);
    const horasAteEvento = Math.floor((distanciaAteEvento % dias) / horas);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horas) / minutos);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutos) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento} dias ${horasAteEvento} horas ${minutosAteEvento} minutos e ${segundosAteEvento} segundos`;
}, 1000);