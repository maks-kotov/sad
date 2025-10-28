const intro = document.getElementById('intro')
const apples = document.getElementById('apples') //место после которого будут вставляться карточки с яблоками
const pears = document.getElementById('pears') // место полсе которого будут встваляться карточки с грушаи
const input = document.getElementById('input')
const searchResults = document.getElementById('searchResults')
// const cardsArray = document.getElementsByClassName('card')

const cardsInormation = [ //все данные из карточек
    {
        name: "Аксёна",
        description: "Яблоня Аксёна получила своё название в честь человека, который проводил испытания этой формы на севере Свердловской области (г. Серов) – Василия Матвеевича Аксёнова. Мякоть приятного кремового цвета, мелкозернистой консистенции, довольно плотная, но не очень хрустящая, средней сочности, аромат приятный.<br>Вкус хороший, кисло-сладкий. Вкусовые качества оценивают от 4,3 до 5,0 баллов. Вес плода средний: 110-130гр. созревает к 20 числам августа зимостойкость высокая, об этом часто упоминают садоводы. Но если сравнивать с материнской формой (Серебряное копытце), то Аксёна в этом компоненте слегка уступает. Обладает довольно мощным иммунитетом против основных болезней и вредителей культуры.<br>Особенно ценится за высокую устойчивость к 5-ти расам парши.",
        img: "./images/apple1.jpg",
        price: "500"
    },
    {
        name: "Серебряное копытце",
        description: "Серебряное копытце — летний сорт яблони, выведенный на Свердловской опытной станции садоводства. Плоды сорта Серебряное копытце одномерные и мельче среднего размера, вес одного яблока обычно равен 80-90 граммам, но иногда может доходить до 100-110 граммов. Мякоть плодов яблони Серебряное копытце имеет достаточно плотную, мелкозернистую структуру и кремовый оттенок.<br>Яблоки очень сочные, отличного кисло-сладкого вкуса, Если плоды не снять вовремя с деревьев, а оставить висеть чуть дольше, то они становятся настоящими наливными яблоками, оставаясь при этом тяжелыми и приобретая полупрозрачность. Показатели зимостойкости у сорта хорошие. К главным достоинствам яблони Серебряное копытце относят: высокие показатели скороплодности и урожайности.",
        img: "./images/apple2.jpg",
        price: "500"
    },
    {
        name: "Конфетное",
        description: "Конфетное относится к группе летних сортов яблони. Это сорт отечественной селекции, созданный во Всесоюзном НИИ им. Мичурина при скрещивания старых русских сортов Коробовка и Папировка. Срок съёма плодов наступает в августе. Плоды среднего размера, обычно 80 — 120 г, На вкус яблоки очень сладкие со специфическим тонким ароматом. Зимостойкость деревьев довольно высокая.",
        img: "./images/apple3.jpg",
        price: "500"
    },
    {
        name: "Мантет",
        description: "Мантет Канадский сорт летнего созревания. Сорт получен на опытной станции в Мордене (Манитоба) в 1928 году путем гибридизации Макинтош(McIntosh) и Tetofsky (так в США и Канаде именовали старинный русский сорт Грушовка московская). Несмотря на некую схожесть с Грушовкой московской, плоды отличаются немного более крупными размерами и лучшими вкусовыми качествами.<br>Плоды этого сорта средней величины, вес одного яблока не превышает 180 грамм. По вкусу яблоки сорта Мантет довольно сочные, сладкие, кислинка практически не ощущается, с превосходными десертными качествами. Мякоть ароматная, нежная, белого оттенка. деревья имеют среднюю зимостойкость.",
        img: "./images/apple4.jpg",
        price: "500"
    },
    {
        name: "Уральское наливное",
        description: "Уральское наливное осенний сорт селекции Южно-Уральского научно-исследовательского института плодоовощеводства. Плоды 40-50 г, выравненные, округло-конической формы, слабо ребристые. При созревании не осыпаются. Кожица гладкая, блестящая, желтая.<br>Мякоть, мелкозернистая, сочная. Вкус сладкий, со слабой кислотой и легким ароматом.Сорт идеально подходит для употребления в свежем виде, а также для приготовления компотов и других видов переработки. Зимостойкость повышенная.",
        img: "./images/apple5.jpg",
        price: "500"
    },
    {
        name: "Спартак",
        description: "Осенний сорт выведен С.П. Кедриным на Самарской опытной станции по садоводству путем отбора среди сеянцев Шаропая посева 1936 года. Плоды средней величины (90–130 г), на молодых деревьях нередко можно встретить плоды массой 300 г. Форма плода плоскоокруглая или округлая. Мякоть кремовая, мелкозернистая, нежная, средней плотности, хорошего кисло-сладкого вкуса, столового назначения. Съём плодов проводится в первой половине сентября.",
        img: "./images/apple6.jpg",
        price: "500"
    },
    {
        name: "Раннелетний сорт селекции И.В. Мичурина",
        description: "Получен от гибридизации сортов Налив белый и Китайка. Сорт включен в Госреестр по Северо-Западному и Волго-Вятскому регионам в 1947 году. Плоды мелкие, янтарно-желтые, при созревании часто наливаются. Мякоть плодов желтоватая, хорошего вкуса, кисловатая. Созревают плоды в конце июля. В течение 5–7 дней после съёма плоды должны быть использованы. Перед созреванием плоды осыпаются. Сорт высокой зимостойкости и скороплодности.",
        img: "./images/apple7.jpg",
        price: "500"
    },
    {
        name: "Северный синап",
        description: "Плоды средней величины (средний вес 120 г), округло-конической формы или стаканчатые. Кожица гладкая, при хранении становится маслянистой. Основная окраска желтовато-зеленая, покровная – в виде буровато-красного румянца на освещенной стороне плода. Мякоть белая или слегка зеленоватая, мелкозернистая, кисловато-сладкая, средней плотности, сочная, освежающая, Плоды обладают высокой лежкоспособностью, потребление лучше начинать к концу декабря так как в это время плоды только начинают набирать вкус. Оптимальная температура хранения 0…+1 °С Сорт достаточно зимостоек.",
        img: "./images/apple8.jpg",
        price: "500"
    },
    {
        name: "Антей",
        description: "Позднезимний сорт белорусской селекции. Плоды крупные (200 г), округло-конической слегка плоской формы, Мякоть зеленовато-белая, сочная, мелкозернистая, плотная, со средним ароматом, очень приятного гармоничного кисло-сладкого вкуса. В плодоношение вступает на третий-четвертый год после посадки в сад. Съемная зрелость плодов наступает во второй половине сентября.",
        img: "./images/apple9.jpg",
        price: "500"
    },
    {
        name: "Красуля",
        description: "Летний сорт, плоды ниже среднего размера, средней массой 90 г, максимальной – до 120 г, средней одномерности, бергамотообразные, округлые. Мякоть плода кремовая, нежная, полумаслянистая, очень сочная и сладкая, отличного вкуса (4,7 балла), с пряностью и средним ароматом. Очень зимостойкий сорт, в плодоношение вступает на 4-5-й год, созревать начинает в первой половине августа.",
        img: "./images/apple10.jpg",
        price: "500"
    },
    {
        name: "Чижовская",
        description: "Плоды среднего размера, массой 120–140 г, обратнояйцевидной или грушевидной формы, поверхность гладкая. Основная окраска желто-зеленая. Покровная окраска отсутствует или очень слабо выражена в виде размытого розового румянца, начинает созревать с середины августа.<br>Мякоть светло-желтая или почти белая, среднесочная, полумаслянистая, тающая, слабоароматная, хорошего кисловато-сладкого освежающего вкуса. Сорт зимостойкий, практически самоплодный, вступает в плодоношение на 3-4-й год после прививки.",
        img: "./images/pear1.jpg",
        price: "600"
    },
    {
        name: "Памяти Яковлева",
        description: "Дерево небольшое, быстрорастущее, средней густоты, с округлой кроной. Созревает в конце августа, плоды средние, (120-140гр) начинают плодоносить на 3-4-й год после посадки в сад, мякоть плодов кремовая, сочная, сладкая, полумаслянистая.",
        img: "./images/pear2.jpg",
        price: "600"
    },

]

function createCard(name, description, img, price) {
    return `
        <section class="card" id="${name}">
                <div class="card__image-block">
                    <div class="card__image-container">
                        <img class="card__image" src="${img}">
                        
                        <div class="card__title">
                            <b>
                                ${name}                            
                            </b>
                        </div>
                    </div>
                </div>
                <div class="card__description">
                    
                    <div class="description__text">
                        <p>
                            ${description}
                        </p>
                    </div>
                    <div class="description__bottom">
                        <span class="description__price">Цена: <span>${price}р</span></span>
                        <a href="#"class="description__link">
                            <div class="description__button">Написать</div>
                        </a>
                        
                    </div>
                </div>
            </section>
    `
}

cardsInormation.forEach(card => { //вставить карточки в код
    // если цена 500, то вносим карточку после надписи яблони, если 600, то груши (просто я вид не делал в массивах (вид дерева))
    if (Number(card.price) === 500) {
        apples.insertAdjacentHTML("afterend", createCard(card.name, card.description, card.img, card.price))
    }
    else if(Number(card.price) === 600) {
        pears.insertAdjacentHTML("afterend", createCard(card.name, card.description, card.img, card.price))
    }
});

//реализация поискаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа
for (const card of cardsInormation) { // заносим в searchResults все сорта 
    searchResults.insertAdjacentHTML('beforeend', `<a href="#${card.name}" class="search__a">
        <li class="search__li">${card.name}</li>
        </a>`)
}
for (const a of searchResults.children) { // добавляем всем a класс hide (результатам)
    a.classList.add('hide')            
}
input.addEventListener('input', function() {
    const inputValue = input.value.trim().toLowerCase()
    const inputLength = inputValue.length
    if(inputValue == '') {
        for (const a of searchResults.children) { // добавляем всем li класс hide
            a.classList.add('hide')            
            document.querySelector('.search__results').classList.add('hide')     
        }
    }
    else {
                document.querySelector('.search__results').classList.remove('hide')
        for (const a of searchResults.children) {
            const liText =  a.children[0].textContent.trim()
            
            const posStr = liText.toLowerCase().search(inputValue)

            if(posStr === -1) {
                a.classList.add('hide')

            }
            else {
                a.classList.remove('hide')
                a.children[0].innerHTML = createResult(
                liText.slice(0, posStr),
                liText.slice(posStr, posStr+inputLength),
                liText.slice(posStr+inputLength, liText.length)
            )
            }    
        }
        
    }
})
function createResult(start, middle, end) {
    return `${start}<mark>${middle}</mark>${end}`
}
// поиск написанннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннн

// слайдер началооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо
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
// idInterval хранит id текущего интервала, startInterval создаёт и запускает новый интервал, присваивая его id idInterval'у, stopInterval останавливает interval с текущим idInterval 

console.log(3 % 4); // 3, тк если первое число меньше второго, результат операции остатка будет равен первому числу.
// слайдер конецццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццццц



