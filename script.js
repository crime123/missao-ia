const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual o maior rodeio do brasil?",
        alternativas: [
            {
                texto: "barretos",
                afirmacao: "afirmação"
            },
            {
                texto: "colorado",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual desses cirvuitos é o maior do brasil?",
        alternativas: [
            {
                texto: "PBR.",
                afirmacao: "afirmação"
            },
            {
                texto: "Circuito Rancho Primavera.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual brasileiro ganhou campeão mundial?",
        alternativas: [
            {
                texto: "cassio Dias.",
                afirmacao: "afirmação"
            },
            {
                texto: "Jose Vitor Lemes.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quantos milhões o capeão mundial ganhou?",
        alternativas: [
            {
                texto: "1 milhão.",
                afirmacao: "afirmação"
            },
            {
                texto: "2 milhões.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual o touro de rodeio mais caro do Brasil? ",
        alternativas: [
            {
                texto: "touro acesso negado.",
                afirmacao: "afirmação"
            },
            {
                texto: "touro bandido.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
