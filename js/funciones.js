//Establece una escucha de evento y ejecuta la funcion asociada
window.addEventListener("scroll", efectoParallax);

//Declara variables que referencian elementos HTML para modificar sus propieaes a traves de JS
const logo = document.querySelector(".logo");
const figuras = document.querySelectorAll(".galeria figure");
const galeria = document.querySelector(".galeria");
//Declaracion de la funcion efectoParalax
function efectoParallax() {
    //Saber el valor actual de scrolltop el elemento de documento
    const vScroll = document.documentElement.scrollTop;
    //logo.style.top=`${vScroll}px`;
    logo.style.transform = `translate(0px, ${vScroll/2}px)`;
    if (vScroll > galeria.offsetTop - (window.innerHeight/1.5)) {        
        figuras.forEach(
            function (figura) {
                figura.classList.add("mostrar");
            }
        );
        console.log(galeria.offsetTop);
    }
}
