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
                afirmacao: "e o primeiro rodeio ja feito no brisil "
            },
            {
                texto: "americana",
                afirmacao: "é o segundo maior rodeio do Brasil"
            }
        ]
    },
    {
        enunciado: "qual desses cirvuitos é o maior do brasil?",
        alternativas: [
            {
                texto: "PBR.",
                afirmacao: "é o principal circuito de rodeio do mundo"
            },
            {
                texto: "Circuito Rancho Primavera.",
                afirmacao: "o mais famoso do brasil "
            }
        ]
    },
    {
        enunciado: "Qual brasileiro ganhou campeão mundial 2024?",
        alternativas: [
            {
                texto: "cassio Dias.",
                afirmacao: "ele foi o campeão  mundial desta uma temporada"
            },
            {
                texto: "Jose Vitor Lemes.",
                afirmacao: "ele foi campeão mundial na temporada de 2020 e 2021"
            }
        ]
    },
    {
        enunciado: "quantos milhões o capeão mundial ganhou?",
        alternativas: [
            {
                texto: "1 milhão.",
                afirmacao: "dessa temporada foi dado 1 milão de dolares "
            },
            {
                texto: "cassio dias .",
                afirmacao: "ele foi o ultimo capeão mundial mundial"
            }
        ]
    },
    {
        enunciado: "qual o touro de rodeio mais caro do Brasil? ",
        alternativas: [
            {
                texto: "touro acesso negado.",
                afirmacao: "1.087.500,00 foi o preço dele"
            },
            {
                texto: "touro bandido.",
                afirmacao: "na época o touro bandido foi avaliado em 800.000"
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
}1.087.500,00

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2041.087.500,009...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
