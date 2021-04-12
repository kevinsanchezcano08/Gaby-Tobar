const buttonAnterior = document.getElementById("button_anterior");
const buttonSiguiente = document.getElementById("button_siguiente");
const carousel = document.getElementById("carousel");
const imageList = document.getElementById("image_list");
const slider = document.querySelectorAll(".slider");

const sliderWidth = slider[0].offsetWidth;

buttonAnterior.onclick = () => Move(1);
buttonSiguiente.onclick = () => Move(2);

function Move(valor){
    const carouselWidth = carousel.offsetWidth;
    const listWidth = imageList.offsetWidth ;

    carousel.style.left == "" ? leftPosition = carousel.style.left = 0 : leftPosition = parseFloat(carousel.style.left.slice(0, -2) * -1);
    
    if(leftPosition < (carouselWidth - listWidth) && valor == 2){
        carousel.style.left = `${-1 * (leftPosition + sliderWidth)}px`;
    }else if(leftPosition > 0 && valor == 1){
        carousel.style.left = `${-1 * (leftPosition - sliderWidth)}px`
    }
}