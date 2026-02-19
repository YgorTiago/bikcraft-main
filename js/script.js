//Ativa links do header
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
   const url = location.href
   const href = link.href
   if (url.includes(href)){
    link.classList.add("ativo");
}

}

links.forEach(ativarLink)

//Ativar itens do orçamenento

const parametros = new URLSearchParams(location.search) ;

function ativarProduto (parametro){
    const elemento = document.getElementById(parametro);
   if (elemento){
    elemento.checked = true;
   } 
console.log(elemento);
}

parametros.forEach(ativarProduto);

//PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button")
console.log(perguntas)

function ativarPergunta (event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls')
    const especifico = document.getElementById(controls);

    especifico.classList.toggle('ativa')
    const ativa = especifico.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
   

}
function acaoPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);

}
perguntas.forEach(acaoPerguntas);
// GALERIA

    const galeria =  document.querySelectorAll('.bicicleta-image img');
    const galeriaContainer = document.querySelector('.bicicleta-image')
    console.log(galeriaContainer)

    function trocarImagem(event){
        const img = event.currentTarget;
        const media = matchMedia("(min-width: 1000px)").matches;
         
        if (media){
            galeriaContainer.prepend(img)
        }
    }
  

    function eventosGaleria(img){
        img.addEventListener ('click', trocarImagem);

    }

    galeria.forEach(eventosGaleria)