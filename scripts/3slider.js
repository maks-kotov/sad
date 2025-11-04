const sliderContainer = document.querySelector('.slider__container') //сам слайдер (короткий)
const slider = document.querySelector('.slider') //слайды (длинный)
const slidersCount = slider.children.length
const sliderButtons = document.querySelector('.slider__buttons')
const sliderCheckbox = document.querySelector('.offSlider')
let currentSlide = 0 
function showSlide(index) {
    slider.children[currentSlide].style.visibility = `hidden` // первый эл visible по умолчанию  
    slider.children[currentSlide].style.transition = `visibility 1s ease`
    sliderButtons.children[currentSlide].classList.remove('makeBlack')
    currentSlide = index

    if (currentSlide >= slidersCount) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slidersCount - 1;
    }
    
    slider.children[currentSlide].style.visibility = `visible` //второму слайду дарю видимость
    slider.style.transform = `translateX(-${currentSlide * 100}%)` //сдвиг
    slider.children[currentSlide].style.minWidth = `${sliderContainer.offsetWidth}px` //эта  строчка для последнего слайда который выходит за границы внешнего контейнера
    sliderButtons.children[currentSlide].classList.add('makeBlack')
}
let idInterval
function changeSlides() {
    showSlide((currentSlide + 1) % slidersCount)
}
function startInterval(func, interval) {
    idInterval = setInterval(func, interval)
}
function stopInterval() {
            clearInterval(idInterval)
}

sliderCheckbox.addEventListener('click', function () {
    if(sliderCheckbox.checked) {
        startInterval(changeSlides, 1000);
    }
    else {
        stopInterval()
    }
})

for (let i=0; i < sliderButtons.children.length; i++) {
    sliderButtons.children[i].addEventListener('click', showSlide.bind(null, i))    
}


