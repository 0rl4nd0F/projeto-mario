/* 
    obj.1 - quando clicka no botão de ver trailer, aparecer uma modal com video do trailer.
    passos:
    - pegar o elemento que representa o botão da tela, usando o js;
    - saber quando o usuario clicou no botão;
    - dar um jeito de pegar o elemento da modal no js;
    - abrir modal.
    obj.2 - quando clica no x, é pra fechar a modal.
    passos:
    - dar um jeito de pegar o elemento de fechar modal;
    - saber quando o usuario clicou no botão de fechar;
    - fechar a modal.
*/

const linkDoTrailer = trailer.src
const video = document.getElementById("trailer");
const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');

function alternarModal() {
    modal.classList.toggle("aberto"); 
}

//abrir trailer:
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoTrailer);

});
//fechar trailer:
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});







