const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        // texto: "assim que acabou o mundial, qual foi o brasileiro que foi o capeao muldia do rodeio PBR?",
        afirmação: [
            "Cassios dias barbosa!",
            "Jose vitor lemes!"
        ]
    },
    {
        texto: " qual e o maior campenato brasileiro entre esses dois?"
        afirmação: [
            "ekipe rozeta",
            "circuito rancho primavera",
        ]
    },
    {
        texto: "qual o maior rodeio brasileiro?",
        afirmação: [
            "barretos",
            "jaguariuna"
        ]
    },
    {
        texto: "quem foi o atual campeao de barretos no ano 2023?",
        afirmação: [
            "
            
           "warley oliveira"
            "murilo henrique",
            
        ]
    },
    {
        texto: "qual foi o primeiro rodeio do brasil?",
        afirmação: [
           "colorado.",
            "barretos."
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
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click",() => respostasSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
           
       function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    Let historia final = "";


