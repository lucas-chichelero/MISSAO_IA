const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "VAI CURINTIA",
        alternativas:[
            {
            texto: "VAI CURINTIA", 
        afirmacao: "VAI CURINTIA"
    },
    {
        texto: "VAI CURINTIA",
        afirmacao: "VAI CURINTIA"
    }
        ]
    },
    {
        enunciado: "VAI CURINTIA",
        alternativas:[
            {
            texto: "VAI CURINTIA", 
        afirmacao: "VAI CURINTIA"
    },
    {
        texto: "VAI CURINTIA",
        afirmacao: "VAI CURINTIA"
    }
        ]
    },
    {
        enunciado: "VAI CURINTIA",
        alternativas:[
            {
            texto: "VAI CURINTIA", 
        afirmacao: "VAI CURINTIA"
    },
    {
        texto: "VAI CURINTIA",
        afirmacao: "VAI CURINTIA"
    }
        ]
    },
    
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="VAI CURINTIA";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();