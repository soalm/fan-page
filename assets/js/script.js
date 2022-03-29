let totalSlides = document.querySelectorAll('.sliderItem').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.imagesBody').clientWidth;

document.querySelector('.imagesBody-container').style.width = 
    `${sliderWidth * totalSlides}px`;


document.querySelector('.controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.controls').style.height = 
    `${document.querySelector('.imagesBody').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.sliderItem').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.imagesBody-container').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 5000);