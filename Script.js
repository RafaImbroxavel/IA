const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando voce vai assistir anime, Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Quem é o próximo personagem favorito?",
                afirmacao: "Quem é o próximo personagem favorito? Porque sempre tem aquele personagem que a gente acaba se apegando. Seja o herói determinado, o vilão carismático, ou o coadjuvante que rouba a cena"
            },
            {
                texto: "O que será que vai acontecer nesse episódio",
                afirmacao: "Quando me preparo pra um episódio de anime, Fico pensando no desenrolar da trama, nas reviravoltas e nos segredos que ainda vão ser revelados. É quase como tentar montar um quebra-cabeça gigante onde cada episódio é uma peça importante. Será que aquele personagem misterioso é realmente um vilão ou tem algo mais por trás? E aquele casal que todo mundo shippa, será que vai rolar finalmente?.."
            }
        ]
    },
    {
        enunciado: "Personagens",
        alternativas: [
            {
                texto: "Como será que esse personagem vai evoluir ao longo da história??.",
                afirmacao: "Você começa a pensar como que aquele personagem vai evoluir, se o roteiro vai favorer o personagem ou não"
            },
            {
                texto: "Identificação com os Personagens.",
                afirmacao: "Você nota que o personagem tem os mesmos problemas que o seu, dois fracassados!"
            }
        ]
    },
    {
            enunciado: "Quando voce começa a avancar os episodios",
        alternativas: [
            {
                texto: "Qual a historia daquele personagem?",
                afirmacao: "Que personagem foda! qual e a historia dele?."
            },
            {
                texto: "Conforme os episódios passam você nota segredos.",
                afirmacao: "Sera que isso vai se revelar?."
            }
        ]
    },
    {
        enunciado: "Nivel de poder",
        alternativas: [
            {
                texto: "Como esse personagem e tao forte?.",
                afirmacao: "Como diabos o autor criou um poder ridiculo de forte desse?"
            },
            {
                texto: "Que poder ruim kkkkkkk?",
                afirmacao: "Alem de ser fracassado, e ruim, feio e fraco, BUXA!"
            }
        ]
    },
    {
        enunciado: "Final da historia",
        alternativas: [
            {
                texto: "Que final foda...",
                afirmacao: "Esse final foi foda, chorei..."
            },
            {
                texto: "Que final merda?",
                afirmacao: "Esse final foi uma merda..."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Anime...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
