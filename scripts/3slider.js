const sliderContainer = document.querySelector('.slider__container') //сам слайдер (короткий)
const slider = document.querySelector('.slider') //слайды (длинный)
const slidersCount = slider.children.length
const sliderButtons = document.querySelector('.slider__buttons')
const sliderCheckbox = document.querySelector('.offSlider')
let currentSlideIndex = 0 
function showSlide(index) {
    const currentSlide = slider.children[currentSlideIndex] 
    
    currentSlide.style.visibility = `hidden` //первый эл visible поумолчанию (в html прописано)  
    sliderButtons.children[currentSlideIndex].classList.remove('makeBlack')
    currentSlideIndex = index

    if (currentSlideIndex >= slidersCount) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slidersCount - 1;
    }
    
    currentSlide.style.visibility = `visible` //второму слайду дарю видимость
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)` //сдвиг
    currentSlide.style.minWidth = `${sliderContainer.offsetWidth}px` //эта  строчка для последнего слайда который выходит за границы внешнего контейнера
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


