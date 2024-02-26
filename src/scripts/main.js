AOS.init();


const dataEvento = new Date("Mar 21, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(() => {
  const agora = new Date ();
  const timeStampAgora = agora.getTime();

  const tempoAteEvento = timeStampEvento - timeStampAgora;

  const diaMs = 1000 * 60 * 60 * 24;
  const horasMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;
  const segMs = 1000;

  const diasAteEvento = Math.floor(tempoAteEvento / diaMs);
  const horasAteEvento = Math.floor( (tempoAteEvento % diaMs) / horasMs);
  const minutosAteEvento = Math.floor( (tempoAteEvento % horasMs) / minMs );
  const segundosAteEvento = Math.floor( (tempoAteEvento % minMs) / segMs);

  document.getElementById('contador').innerHTML = `${diasAteEvento}d(s), ${horasAteEvento}h(s), ${minutosAteEvento}min(s), ${segundosAteEvento}seg(s)`;

  if (tempoAteEvento < 0) {
    clearInterval(contaTempo);
    document.getElementById('contador').innerHTML = 'Evento expirado'
  }
}, 1000);
