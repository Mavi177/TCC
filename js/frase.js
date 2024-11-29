// Seu código JavaScript aqui
const phrases = [
    "Em 68,7% dos casos, o abuso acontece no ambiente residencial, geralmente cometido por pessoas próximas (FUNDAÇÃO ABRINQ) (UNICEF).",
    "A cada 4 casos de violência sexual, 3 envolvem crianças e adolescentes.",
    "87,7% das vítimas de abuso sexual são meninas."
];

let currentPhraseIndex = 0;
const typingMessage = document.getElementById("typingMessage");

// Função para alterar a frase e animar a digitação
function changePhrase() {
    typingMessage.textContent = phrases[currentPhraseIndex];
    typingMessage.style.width = '0'; // Reseta a largura para reiniciar a animação

    // Incrementa o índice da frase
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    // Reinicia a animação após um pequeno delay
    setTimeout(() => {
        typingMessage.style.animation = 'none'; // Reseta a animação
        typingMessage.offsetHeight; // Força uma reflow
        typingMessage.style.animation = ''; // Reaplica a animação
    }, 50);
}

// Muda a frase a cada 10 segundos (tempo suficiente para a animação completa)
setInterval(changePhrase, 10000);

// Inicializa com a primeira frase
changePhrase();


