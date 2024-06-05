const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        // enunciado: "assim que acabou o mundial, qual foi o brasileiro que foi o capeao muldia do rodeio PBR?",
        alternativas: [
            "Cassios dias barbosa!",
            "Jose vitor lemes!"
        ]
    },
    {
        enunciado: " qual e o maior campenato brasileiro entre esses dois?"
        alternativas: [
            "ekipe rozeta",
            "circuito rancho primavera",
        ]
    },
    {
        enunciado: "qual o maior rodeio brasileiro?",
        alternativas: [
            "barretos",
            "jaguariuna"
        ]
    },
    {
        enunciado: "quem foi o atual campeao de barretos no ano 2023?",
        alternativas: [
            "
            
           "warley oliveira"
            "murilo henrique",
            
        ]
    },
    {
        enunciado: "qual foi o primeiro rodeio do brasil?",
        alternativas: [
           "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
