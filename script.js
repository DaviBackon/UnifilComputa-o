// Obtendo todas as imagens com a classe "alternativas"
const alternativas = document.querySelectorAll('.alternativas');

let mensagemElement = document.getElementById('mensagem');


// Função para verificar a resposta e mudar a cor
  function verificarResposta(event) {
  const imagemClicada = event.target;
  const respostaCorreta = imagemClicada.alt === 'cat';

  // Adicionando a classe correspondente para mudar a cor
  imagemClicada.classList.add(respostaCorreta ? 'correta' : 'errada');

  // Desabilitando os cliques nas outras imagens após a resposta
  alternativas.forEach(img => img.removeEventListener('click', verificarResposta));

  if (respostaCorreta) {
    mensagemElement.textContent = 'Parabéns! Você acertou!';
} else {
    mensagemElement.textContent = 'Que pena! tente outra vez!';
}

}

// Adicionando o evento de clique a todas as imagens
  alternativas.forEach(imagem => imagem.addEventListener('click', verificarResposta));

