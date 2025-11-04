const contactButtons = document.querySelectorAll('.description__link')
const overlay = document.createElement('div')
const menu_elArr = document.querySelectorAll('.menu_el')
const groups = document.querySelector('#groups')
const write = document.querySelector('#write')
const popUpMenu = document.querySelector('.popupMenu')
const popupTitle = document.querySelector('.popupMenu__title')
const popupMenuNetworks = document.querySelector('.popupMenu__networks')
const krestik = document.querySelector('.krestik')

window.onload = function() { // чтобы высота overlay была равна настоящей высоте сайта
            overlay.style.height = `${document.documentElement.scrollHeight}px`
            overlay.style.width = '100%'
            overlay.style.background = '#000000'
            overlay.style.opacity = '0'
            overlay.style.position = 'absolute'
            overlay.style.transition = 'opacity 0.4s ease'
    document.body.insertAdjacentElement('afterbegin', overlay)
}
function insertNetworks(networks) {
    return `
            ${networks.includes('write vk') ? 
                `
                <a href="https://vk.com/id269890255" target="_blank" class="popupMenu__link">
                    <img class="popupMenu__img" src="./images/icon-vk.png" alt="write vk">
                </a>` 
                : 
                ''
            }
            ${networks.includes('write tg') ? 
                `
                <a href="https://t.me/Sergey76549" target="_blank" class="popupMenu__link">
                    <img class="popupMenu__img" src="./images/icon_tg2.png" alt="write tg">
                </a>
                `
                : 
                ''
            }
            ${networks.includes('write odn') ? 
                `
                <a href="https://ok.ru/natalya.mix" target="_blank" class="popupMenu__link">
                <img class="popupMenu__img" src="./images/icon_odnoklasniki.png" alt="write odn">
                </a>
                `
                : 
                ''
            }
            ${networks.includes('group vk') ? 
                `
                <a href="https://vk.com/zelenyisad?from=groups" target="_blank" class="popupMenu__link">
                <img class="popupMenu__img" src="./images/icon-vk.png" alt="group vk">
                </a>
                `
                : 
                ''
            }
            ${networks.includes('group odn') ? 
                `
                <a href="https://ok.ru/zelenyisadok" target="_blank" class="popupMenu__link">
                <img class="popupMenu__img" src="./images/icon_odnoklasniki.png" alt="group odn">
                </a>
                `
                : 
                ''
            }
    `
}
function hidePopupOnClickOutside() {
    if ( 
                !popUpMenu.contains(event.target)
                && !write.contains(event.target) 
                && !groups.contains(event.target)
                && !event.target.classList.contains('description__button')
                ) 
                {
                    hidePopup()
            }
}
function showPopup(text, networks) {
    popupTitle.textContent = text
    popupMenuNetworks.innerHTML = insertNetworks(networks) // вставляет в разметку соц сети, взависиммости от переданого массива
    popUpMenu.style.top = "50%"
    overlay.style.opacity = '0.5'
    overlay.style.zIndex = '1'
    document.addEventListener('click', hidePopupOnClickOutside)
}
function hidePopup() {
        popUpMenu.style.top = "-100%"
        overlay.style.opacity = '0'
        overlay.style.zIndex = '0'
        document.removeEventListener('click', hidePopupOnClickOutside)
}
for (const button of contactButtons) { // вешаем функцию на кнопки написать
    button.addEventListener('click', showPopup.bind(null, 'Выберите чат', ['write vk', 'write tg', 'write odn']))
}
write.addEventListener('click', showPopup.bind(null, 'Выберите чат', ['write vk', 'write tg', 'write odn']))
groups.addEventListener('click', showPopup.bind(null, 'Выберите группу', ['group vk', 'group odn']))
krestik.addEventListener('click', hidePopup)


