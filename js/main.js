const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const cor = document.querySelectorAll("[data-cor]");
const imagem = document.querySelector("[data-imagem]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// cor.forEach ((elemento) => {
//     elemento.addEventListener("click", (evento) => {
//         alterarCor();
//     })
// })

controle.forEach ( (elemento) => {
     elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica (evento.target.dataset.controle, evento.target.dataset.peca); 
     })
 })

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        if (peca.value === "0") {
            alert("Não é possível ter valores negativos. Adicione peças.");
        } else {
            peca.value = (parseInt(peca.value)) -1;
        } 
    } else {
        peca.value = (parseInt(peca.value)) +1;
    }
}

function atualizaEstatistica(operacao, peca) {

    estatistica.forEach( (elemento) => {
         if (operacao === '-') {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
         } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
         }
        
        
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/robotron_" + cor + ".png";
 }
