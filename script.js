const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o melhor anime do mundo?",
        alternativas: [
            {
                texto: "Boku no piko",
                afirmacao: "Anime muito bom, o prota gosta muito de sorvete"
            },
            {
                texto: "Kaifuku",
                afirmacao: "O anime de 'vingança'?.."
            }
        ]
    },
    {
        enunciado: "você esta assistindo um anime e apos alguns episódios o protagonista começam a ficar muito overpower",
        alternativas: [
            {
                texto: "você acredita que ele treinou para conseguir esse poder.",
                afirmacao: "Você começa a pensar como que aquele personagem vai evoluir"
            },
            {
                texto: "você pensa que o roteiro favoreceu esse personagem.",
                afirmacao: "personagem lixo, se não fosse pelo roteiro ja estaria morto!"
            }
        ]
    },
    {
            enunciado: "conforme você avancar os episodios se um anime",
        alternativas: [
            {
                texto: "aquele personagem e foda demais",
                afirmacao: "Que personagem foda! qual e a historia dele?."
            },
            {
                texto: "aquele personagem e uma merda, nem deveria estar no anime",
                afirmacao: "Sera que isso vai se revelar?."
            }
        ]
    },
    {
        enunciado: "Final da história",
        alternativas: [
            {
                texto: "que final foda.",
                afirmacao: "esse final foi foda chorei"
            },
            {
                texto: "que final merda",
                afirmacao: "esse final foi uma merda!"
            }
        ]
    },
    {
        enunciado: "qual o personagem mais forte dos animes",
        alternativas: [
            {
                texto: "Goku",
                afirmacao: "Goku perdeu..."
            },
            {
                texto: "Saber",
                afirmacao: "Saber solou o verso de dragon ball..."
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
 
