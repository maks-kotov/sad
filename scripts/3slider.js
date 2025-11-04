const sliderContainer = document.querySelector('.slider__container') //сам слайдер (короткий)
const slider = document.querySelector('.slider') //слайды (длинный)
const slidersCount = slider.children.length
const sliderButtons = document.querySelector('.slider__buttons')
const sliderCheckbox = document.querySelector('.offSlider')
let currentSlideIndex = 0 
function showSlide(index) {
    const currentSlide = slider.children[currentSlideIndex] 
    
    sliderButtons.children[currentSlideIndex].classList.remove('makeBlack')
    currentSlideIndex = index

    if (currentSlideIndex >= slidersCount) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slidersCount - 1;
    }

    slider.children[currentSlideIndex].style.minWidth = `${sliderContainer.offsetWidth}px` // если ширина изображения меньше ширины контейнера, то оно растянется под ширину контейнера
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)` //сдвиг
    sliderButtons.children[currentSlideIndex].classList.add('makeBlack')
}
let idInterval
function changeSlides() {
    showSlide((currentSlideIndex + 1) % slidersCount)
}
function startInterval(func, interval) {
    idInterval = setInterval(func, interval)
}
function stopInterval() {
            clearInterval(idInterval)
}

function checkingCheckbox() {
    if(sliderCheckbox.checked) {
        startInterval(changeSlides, 5000);
    }
    else {
        stopInterval()
    }
}
checkingCheckbox()
sliderCheckbox.addEventListener('click', checkingCheckbox)

for (let i=0; i < sliderButtons.children.length; i++) {
    sliderButtons.children[i].addEventListener('click', showSlide.bind(null, i))    
}


