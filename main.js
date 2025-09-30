function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
        // Define um timer para parar o áudio após 10 segundos
        setTimeout(() => {
            elemento.pause();
            elemento.currentTime = 0; // Opcional: Reinicia o áudio para o começo
            // Adicione aqui a lógica para "virar a caixa com a resposta"
            // Por exemplo, você pode chamar uma função que exibe a resposta
            // ou adiciona uma classe CSS para mostrar a caixa.
            console.log("Tempo esgotado! Revelar resposta.");
            // Exemplo: chamar uma função para mostrar a resposta
            // revelarResposta(seletorAudio);
        }, 10000); // 10000 milissegundos = 10 segundos
    }
    else{
        alert('Non Ecziste');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');
for (let contador = 0; contador<listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
// A função tocaSomTom() precisa ser ajustada para seguir a mesma lógica
// se você quiser que ela também pare após 10 segundos.
function tocaSomTom(){
    const audioTom = document.querySelector('#som_tecla_tom');
    audioTom.play();
    setTimeout(() => {
        audioTom.pause();
        audioTom.currentTime = 0;
        console.log("Tempo esgotado para o som 'Tom'!");
        // Adicione a lógica de revelação da resposta para o som 'Tom' aqui
    }, 10000);
    // As outras pausas aqui não são necessárias se você quer que apenas o som clicado toque
    // e pare após 10 segundos. Se a intenção é que clicar em 'Tom' pare todos os outros,
    // então mantenha as linhas abaixo, mas elas não se encaixam na lógica de "tocar por 10s e parar".
    document.querySelector('#som_tecla_pallet_town').pause();
    document.querySelector('#som_tecla_pokemon_center').pause();
    document.querySelector('#som_tecla_wild_pokemon').pause()
    document.querySelector('#som_tecla_N_battle').pause();
    document.querySelector('#som_tecla_Cynthia').pause();
    document.querySelector('#som_tecla_Iris').pause();
    document.querySelector('#som_tecla_driftveil_city').pause();
    document.querySelector('#som_tecla_twinleaf_town').pause();
    document.querySelector('#som_tecla_littleroot_town').pause();
    document.querySelector('#som_tecla_lavander_town').pause();
    document.querySelector('#som_tecla_lake').pause();
}
function tocaSom(seletorAudio) {
    const elementoAudio = document.querySelector(seletorAudio);
  
    if (elementoAudio != null && elementoAudio.localName === 'audio') {
      // Para evitar múltiplos timers, limpe timers anteriores
      if (window.timerFlip) {
        clearTimeout(window.timerFlip);
      }
  
      // Reproduz o áudio do início
      elementoAudio.currentTime = 0;
      elementoAudio.play();
  
      // Encontra o botão (caixa) relacionado a esse áudio
      // Supondo que o seletorAudio seja algo como '#som_tecla_pom'
      // e o botão tenha a classe 'tecla_pom'
      const classeAudio = seletorAudio.replace('#som_', ''); // ex: 'tecla_pom'
      const botaoCaixa = document.querySelector(`.tecla.${classeAudio}`);
  
      // Remove a classe flipped caso já esteja virada
      if (botaoCaixa) {
        const card = botaoCaixa.querySelector('.card');
        if (card) {
          card.classList.remove('flipped');
        }
      }
  
      // Timer para parar o áudio e virar a caixa após 10 segundos
      window.timerFlip = setTimeout(() => {
        elementoAudio.pause();
        elementoAudio.currentTime = 0;
  
        if (botaoCaixa) {
          const card = botaoCaixa.querySelector('.card');
          if (card) {
            card.classList.add('flipped');
          }
        }
      }, 10000);
    } else {
      alert('Non Ecziste');
    }
  }
document.querySelector('.tecla_tom').onclick = tocaSomTom;