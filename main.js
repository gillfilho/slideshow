const previous = document.getElementById("previous");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

let interval = undefined;
let timeout = undefined;

previous.addEventListener('click', onPreviousClick);
next.addEventListener('click', onNextClick);
slider.addEventListener('mouseover', pausarSlider);

autoScroll();

//offsetWidth calcula a largura do slider no momento do click

function onPreviousClick() {
    const larguraSlider = slider.offsetWidth;
    slider.scrollLeft -= larguraSlider;
}

function onNextClick() {
    const larguraSlider = slider.offsetWidth;
    slider.scrollLeft += larguraSlider;
}


function pausarSlider() {
    clearTimeout(timeout);
    clearInterval(interval);
    timeout = setTimeout( () => {autoScroll()}, 5000);
}

function autoScroll() {
       interval = setInterval( () => {
        const larguraSlider = slider.offsetWidth;
        const numeroSlides = slider.childElementCount;
        // o index seria 0,1,2 - com +1 fica 1,2 e 3.
        const indexSliderEmFoco = (slider.scrollLeft/larguraSlider) + 1;
        console.log(slider.scrollLeft)
        
        // se o número de slides (3) for igual index do último slider (3)
        if(numeroSlides === indexSliderEmFoco) slider.scrollLeft = 0;
        else slider.scrollLeft += larguraSlider;
    }, 3000)
}